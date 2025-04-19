import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { Card } from 'components/ui/CardModule/Card/Card'
import { CardContent } from 'components/ui/CardModule/CardContent/CardContent'
import { Input } from 'components/ui/Input/Input'
import { Button } from 'components/ui/Button/Button'

export function AuthPage() {
  const [isRegister, setIsRegister] = useState(false)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-stoneLight to-stoneBeige">
      <Card className="w-full max-w-md bg-stoneLight shadow-lg">
        <h2 className="mb-4 text-center text-2xl font-semibold text-stoneDark">
          {isRegister ? 'Register' : 'Login'}
        </h2>
        <CardContent>
          <form className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              className="bg-stoneBeige text-stoneDark"
            />
            <Input
              type="password"
              placeholder="Password"
              className="bg-stoneBeige text-stoneDark"
            />
            {isRegister && (
              <Input
                type="password"
                placeholder="Confirm Password"
                className="bg-stoneBeige text-stoneDark"
              />
            )}
            <Button className="w-full bg-stone-500 text-white hover:bg-stoneDark">
              {isRegister ? 'Sign Up' : 'Sign In'}
            </Button>
          </form>
          <div className="my-4 flex items-center">
            <div className="flex-1 border-t border-stoneGray"></div>
            <span className="px-2 text-stoneDark">or</span>
            <div className="flex-1 border-t border-stoneGray"></div>
          </div>
          <div className="space-y-2">
            <Button
              variant="outline"
              className="flex w-full items-center justify-center border border-stoneGray text-stoneDark hover:bg-stoneBeige"
            >
              <FcGoogle className="mr-2" /> Sign in with Google
            </Button>
            <Button
              variant="outline"
              className="flex w-full items-center justify-center border border-stoneGray text-stoneDark hover:bg-stoneBeige"
            >
              <FaGithub className="mr-2" /> Sign in with GitHub
            </Button>
          </div>
          <p className="mt-4 text-center text-sm text-stoneGray">
            {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              className="text-stone-700 hover:underline"
              onClick={() => setIsRegister(!isRegister)}
            >
              {isRegister ? 'Login' : 'Register'}
            </button>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
