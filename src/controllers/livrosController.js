import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = async (req, res) => {
        try {
            const livrosResultado = await livros.find().exec();
            res.status(200).json(livrosResultado);
        } catch (error) {
            console.error('Error fetching books', error);
            res.status(500).json({ error: 'Erro ao resgatar o livro' });
        }
    }

    static listarLivrosPorId = async (req, res) => {
        try {
            const id = req.params.id;
            const livroEncontrado = await livros.findById(id);
            res.status(200).send(livroEncontrado);
        } catch (err) {
            res.status(400).send({ message: `Erro ao buscar livro por ID: ${err.message}` });
        }
    }

    static cadastrarLivro = async (req, res) => {
        try {
            let livro = new livros(req.body);
            await livro.save();
            res.status(201).send(livro.toJSON());
        } catch (error) {
            res.status(500).send({ message: `${error.message} - erro ao cadastrar livro` })
        }
    }

    static atualizarLivro = async (req, res) => {
        try {
            const id = req.params.id;
            await livros.findByIdAndUpdate(id, { $set: req.body })
            res.status(200).send({ message: 'Livro atualizado com sucesso' })
        } catch (error) {
            res.status(500).send({ message: err.message })
        }
    }

    static excluirLivro = async (req, res) => {
        const id = req.params.id;
        try{
            const livroRemovido = await livros.findByIdAndDelete(id);
            if (livroRemovido) {
                res.status(200).send({message: 'Livro foi retirado do catalogo com sucesso'});
            } else {
                res.status(404).send({message: 'Livro nao foi encontrado'})
            }
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }

}
export default LivroController


