import autores from "../models/Autor.js";

class AutorController {

    static listarAutores = async (req, res) => {
        try {
            const autoresResultado = await autores.find().exec();
            res.status(200).json(autoresResultado);
        } catch (error) {
            console.error('Error fetching books', error);
            res.status(500).json({ error: 'Erro ao resgatar o Autor' });
        }
    }

    static listarAutoresPorId = async (req, res) => {
        try {
            const id = req.params.id;
            const AutorEncontrado = await autores.findById(id);
            res.status(200).send(AutorEncontrado);
        } catch (err) {
            res.status(400).send({ message: `Erro ao buscar Autor por ID: ${err.message}` });
        }
    }

    static cadastrarAutor = async (req, res) => {
        try {
            let autor = new autores(req.body);
            await autor.save();
            res.status(201).send(autor.toJSON());
        } catch (error) {
            res.status(500).send({ message: `${error.message} - erro ao cadastrar Autor` })
        }
    }

    static atualizarAutor = async (req, res) => {
        try {
            const id = req.params.id;
            await autores.findByIdAndUpdate(id, { $set: req.body })
            res.status(200).send({ message: 'Autor atualizado com sucesso' })
        } catch (error) {
            res.status(500).send({ message: err.message })
        }
    }

    static excluirAutor = async (req, res) => {
        const id = req.params.id;
        try{
            const AutorRemovido = await autores.findByIdAndDelete(id);
            if (AutorRemovido) {
                res.status(200).send({message: 'Autor foi retirado do catalogo com sucesso'});
            } else {
                res.status(404).send({message: 'Autor nao foi encontrado'})
            }
        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }

}
export default AutorController


