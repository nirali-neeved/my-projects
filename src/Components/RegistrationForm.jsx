import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { schema } from './ValidationSchema'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Label } from './ui/Label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
  })

  const addressValue = watch('address', '')

  const onSubmit = (data) => {
    console.log('Register data:', data)
    console.log('Validation Errors:', errors)
    alert('Registration Successful!')
    reset()
  }

  return (
    <>
      <div className="flex justify-center items-center p-4 ">
        <Card className="w-full max-w-2xl border-t-4 border-t-blue-600">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center ">
              Registration From
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>First Name</Label>
                  <Input
                    {...register('firstname')}
                    placeholder="Enter First Name"
                  />
                  <p className="text-xs text-red-500 italic">
                    {errors.firstname?.message}
                  </p>
                </div>
                <div className="space-y-2">
                  <Label>Last Name: </Label>
                  <Input
                    {...register('lastname')}
                    placeholder="Enter Last Name"
                  />
                  <p className="text-xs text-red-500 italic">
                    {errors.lastname?.message}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Email: </Label>
                  <Input
                    type="email"
                    {...register('email')}
                    placeholder="Enter email"
                  />
                  <p className="text-xs text-red-500 italic">
                    {errors.email?.message}
                  </p>
                </div>
                <div className="space-y-2">
                  <Label>Date of Birth: </Label>
                  <Input
                    type="date"
                    {...register('dob')}
                    placeholder="Select your dob"
                  />
                  <p className="text-xs text-red-500 italic">
                    {errors.dob?.message}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Password: </Label>
                  <Input
                    type="password"
                    {...register('password')}
                    placeholder="Enter password"
                  />
                  <p className="text-xs text-red-500 italic">
                    {errors.password?.message}
                  </p>
                </div>
                <div className="space-y-2">
                  <Label>Confrim Password: </Label>
                  <Input
                    type="password"
                    {...register('confirmpassword')}
                    placeholder="Enter confirmpassword"
                  />
                  <p className="text-xs text-red-500 italic">
                    {errors.confirmpassword?.message}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Role: </Label>
                  <select
                    {...register('role')}
                    className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm"
                  >
                    <option value="">Select Role</option>
                    <option value="manager">Manager</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                  </select>
                  <p className="text-xs text-red-500 italic">
                    {errors.role?.message}
                  </p>
                </div>
                <div className="space-y-2">
                  <Label>Gender: </Label>
                  <div className="flex items-center gap-6 pt-2">
                    <div className="flex items-center space-x-2">
                      <Input
                        type="radio"
                        value="male"
                        id="male"
                        {...register('gender')}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <Label
                        htmlFor="male"
                        className="cursor-pointer font-normal"
                      >
                        Male
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Input
                        type="radio"
                        value="female"
                        id="female"
                        {...register('gender')}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <Label
                        htmlFor="female"
                        className="cursor-pointer font-normal"
                      >
                        Female
                      </Label>
                    </div>
                  </div>
                  <p className="text-xs text-red-500 italic">
                    {errors.gender?.message}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="address">Address</Label>
                  <span
                    className={`text-[10px] ${addressValue.length > 180 ? 'text-red-500' : 'text-slate-400'}`}
                  >
                    {addressValue.length} / 200
                  </span>
                </div>

                <textarea
                  id="address"
                  {...register('address')}
                  placeholder="Flat No, Street, City, Pincode..."
                  className="w-full"
                />
                <p className="text-xs text-red-500 italic">
                  {errors.address?.message}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    onCheckedChange={(checked) =>
                      setValue('terms', checked, { shouldValidate: true })
                    }
                  />
                  <Label
                    htmlFor="terms"
                    className="text-sm font-medium cursor-pointer"
                  >
                    I accept the terms and conditions
                  </Label>
                </div>
                <p className="text-xs text-red-500 italic">
                  {errors.terms?.message}
                </p>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-11 bg-blue-600 hover:bg-blue-700 font-semibold transition-all text-lg"
              >
                {isSubmitting ? 'Submitting..' : 'Register Now'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
