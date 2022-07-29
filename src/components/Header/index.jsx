import styled from "./style.module.css"

const Header = () => {
    return (
        <header>
            <h1>Burguer <span>Kenzie</span></h1>
            <div>
                <input 
                type="text" 
                placeholder="Digitar Pesquisa"
                />
                <button type="submit">Pesquisar</button>
            </div>
        </header>
    )
}

export default Header