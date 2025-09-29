function Home() {

    const img = "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return (
        <>
            <h1>Home</h1>
            <p>Conteúdo da página.</p>
            <img src={img} alt="home" />
        </>
    )
}

export default Home