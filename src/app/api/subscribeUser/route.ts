
import { z } from 'zod'

const bodyParams = z.object({
    email: z.string(),
   
})



export async function POST(req: Request) {
    try {
        const body = await req.json()
        const result = bodyParams.safeParse(body)
        if (!result.success) throw new Error('Invalid params')
       
        await fetch('https://api.beehiiv.com/v2/publications/pub_306168d8-7377-4be2-beb7-ad832f1022b7/subscriptions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':  `Bearer ${process.env.BEEHIVE_KEY}`, 
            },
            body: JSON.stringify({email: body.email})
            })

        return new Response(
            JSON.stringify({
                success: true,
            }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
    } catch (error: any) {
        console.error(error)
        return new Response(`Error: ${error.message}`, {
            status: 500,
        })
    }
}
