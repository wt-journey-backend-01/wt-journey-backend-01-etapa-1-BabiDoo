function mostraProdutos(lista) {
        return lista.map( ( { id, nome, ingredientes }) => ({
            id,
            nome,
            ingredientes,
        })
    )
}

module.exports = mostraProdutos;