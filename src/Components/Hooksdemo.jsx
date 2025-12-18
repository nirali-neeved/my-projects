import { useState, useEffect, useMemo, useCallback, useTransition } from "react";

const Hooksdemo = () => {

    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState("");
    const [isPending, startTransition] = useTransition();
    
    const totalPrice = useMemo(() => {
        return cart.length * 50;
    }, [cart])
    
    const clearCart = useCallback(() => {
        setCart([]);
    }, [])
    
    const handleSearch = (e) => {
        setSearch(e.target.value);
        startTransition(() => {
            console.log("Search");
        })
    }

    useEffect(() => {
        console.log("Welcome shopping demo");
    }, [])
    
    return (<>
        <div>
            <h2>Shopping demo</h2>
            <input
                type="text"
                placeholder="search"
                value={search}
                onChange={handleSearch}
            />
            <p style={{ color: 'gray' }}>
                Current Search: {search}
            </p>
            {isPending && <p>Loading data...</p>}

            <h3>Total Item:{cart.length}</h3>
            <button onClick={() => setCart([...cart, "New Item"])}>
                Add Item
            </button>

            <h3>Total Price: {totalPrice}</h3>

            <button onClick={clearCart}>
                Clear Cart
            </button>

        </div>
    </>)
}

export default Hooksdemo;