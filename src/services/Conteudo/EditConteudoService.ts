import prismaClient from "../../prisma";

interface ConteudoUpdateRequest {
    conteudo_id: string;
    titulo?: string;
    corpo?: string;
    autor?: string;
    banner?: string;
    categoriaId?: string;
}

class EditarConteudoService {
    async execute({ conteudo_id, titulo, corpo, autor, banner, categoriaId }: ConteudoUpdateRequest) {
        const conteudo = await prismaClient.conteudo.update({
            where: {
                id: conteudo_id,
            },
            data: {
                titulo,
                corpo,
                autor,
                banner,
                categoriaId,
            },
        });

        return conteudo;
    }
}

export { EditarConteudoService };
