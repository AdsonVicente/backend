import { Request, Response } from 'express';
import { ListLiturgiaDiariaServices } from '../../services/liturgia/ListLiturgiaServices';

class ListLiturgiaDiariaController {
    async handle(req: Request, res: Response) {
      
        const { date } = req.query;

        
        if (!date || isNaN(Date.parse(date as string))) {
            return res.status(400).json({ error: 'Invalid or missing date parameter' });
        }

        const listLiturgiaDiaria = new ListLiturgiaDiariaServices();

        
        const liturgiaDate = new Date(date as string);

        const liturgia = await listLiturgiaDiaria.execute(liturgiaDate);

        return res.json(liturgia);
    }
}

export { ListLiturgiaDiariaController };
