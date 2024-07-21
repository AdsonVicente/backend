import { Request, Response } from 'express';
import { EditarConteudoService } from '../../services/Conteudo/EditConteudoService';

class EditConteudoController {
    async handleEdit(req: Request, res: Response) {
        const { id } = req.params;
        const { titulo, corpo, autor, banner, categoriaId } = req.body;

        if (!titulo && !corpo && !autor && !banner && !categoriaId) {
            return res.status(400).json({ error: 'Nenhum campo para atualização foi fornecido' });
        }

        const editConteudoService = new EditarConteudoService();

        try {
            const conteudoAtualizado = await editConteudoService.execute({
                conteudo_id: id,
                titulo,
                corpo,
                autor,
                banner,
                categoriaId,
            });

            return res.status(200).json(conteudoAtualizado);
        } catch (error) {
            console.error('Erro ao editar conteúdo:', error);
            return res.status(500).json({ error: 'Erro interno ao editar conteúdo' });
        }
    }
}

export { EditConteudoController };
