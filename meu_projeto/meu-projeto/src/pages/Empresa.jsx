function Empresa() {
    const img = "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D"
    return (
        <>
            <h1>Empresa</h1>
            <p>Conteúdo da página.</p>
            <img src={img} alt="company" />
        </>
    )
}

export default Empresa