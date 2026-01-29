import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

type Bindings = {
  DATABASE_URL: string
}

const app = new Hono<{ Bindings: Bindings }>()

app.get('/', (c) => {
  return c.json(
    {
      status: 'ok',
      service: 'user-api',
      timestamp: new Date().toISOString(),
    },
    200
  )
})
app.post('/signup', async (c) => {
  try {
    const body = await c.req.json<{
      name: string
      email: string
      password: string
    }>()

    // With Prisma Accelerate, pass your Accelerate connection string via `accelerateUrl`.
    // (In this project, it's stored in the DATABASE_URL binding.)
    const prisma = new PrismaClient({
      accelerateUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password,
      },
    })

    return c.json(
      {
        msg: 'success',
        user: user.name,
      },
      201
    )
  } catch (error: any) {
    console.error('Create user error:', error)

    // Prisma unique constraint error (email already exists)
    if (error.code === 'P2002') {
      return c.json(
        { msg: 'Email already exists' },
        409
      )
    }

    return c.json(
      { msg: `Internal server error: ${error.message}` },
      500
    )
  }
})

export default app;