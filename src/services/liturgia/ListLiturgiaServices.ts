import prismaClient from "../../prisma";

class ListLiturgiaDiariaServices {
    async execute(date: Date) {
        const liturgia = await prismaClient.leituraDiaria.findFirst({
            where: {
                dia: date,
            },
            select: {
                primeiraLeitura: true,
                segundaLeitura: true,
                titulo: true,
                salmoResponsorial: true,
                corLiturgica: true,
                evangelho: true,
                dia: true, // Incluindo a data para referência
            },
        });

        return liturgia;
    }
}

export { ListLiturgiaDiariaServices };
