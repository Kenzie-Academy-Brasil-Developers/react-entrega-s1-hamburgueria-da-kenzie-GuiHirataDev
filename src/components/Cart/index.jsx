import styled from "./style.module.css"

const Cart = ({currentSale, cartTotal, setCartTotal}) => {
    
    const totalCart = () => {
        if(currentSale.length > 0){
            const totalValue = currentSale.reduce((accumulator, actualValue) => {
                return actualValue.price + accumulator
            }, 0)
            setCartTotal(totalValue)
        }
        
    }
    totalCart()
    return (
        <div className={styled.cartContainer}>
            <div className={styled.containerCart}>
                <h2>Carrinho de compras</h2>
                {
                    currentSale.length === 0 ?
                    <div className={styled.divCard}>
                        <h3>Sua sacola está vazia</h3>
                        <p>Adicione itens</p>
                    </div>
                    : currentSale.map((elem) => {
                        return <div key={elem.id} className={styled.cardCart}>
                            <img src={elem.img} alt={`Imagem do item: ${elem.name}`} />
                            <span>
                                <h3 className={styled.productName}>{elem.name}</h3>
                                <p>{elem.category}</p>
                            </span>
                            <button>Remover</button>
                        </div>
                    })
                }
            </div>
            <div className={currentSale.length === 0 ? styled.totalContainerNone : styled.totalContainer}>
                <span>
                    <p>Total</p>
                    <p>R${cartTotal}</p>
                </span>
                <button className={styled.removeAll}>Remover todos</button>
            </div>
        </div>
    )
}

export default Cart