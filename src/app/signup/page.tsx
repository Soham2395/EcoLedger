'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, Mail, Lock, User, ArrowRight, Brain, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ParticlesComponent from "@/components/ui/particles"

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin")

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 }
  }

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const email = formData.get('email')
    const password = formData.get('password')

    console.log("Sign In:", { email, password })
  }

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    const confirmPassword = formData.get('confirm-password')

    if (password !== confirmPassword) {
      console.error("Passwords do not match.")
      return
    }

    console.log("Sign Up:", { name, email, password })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-blue via-black to-black flex items-center justify-center p-4 relative overflow-hidden">
    <ParticlesComponent />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md overflow-hidden">
          <CardHeader className="space-y-1 bg-gradient-to-r from-green-400 to-blue-500 text-white">
            <motion.div 
              className="flex items-center justify-center mb-4"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <Zap className="h-8 w-8 mr-2" />
              <CardTitle className="text-2xl font-bold">EcoLedger</CardTitle>
            </motion.div>
            <CardDescription className="text-blue-100">
              Sign in to your account or create a new one to get started.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              <AnimatePresence mode="wait">
                <TabsContent value="signin" key="signin">
                  <motion.form {...fadeIn} onSubmit={handleSignIn}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <Input id="email" name="email" placeholder="m@example.com" type="email" className="pl-10" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <Input id="password" name="password" type="password" className="pl-10" required />
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:bg-blue-700 text-white" type="submit">
                        Sign In
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.form>
                </TabsContent>
                <TabsContent value="signup" key="signup">
                  <motion.form {...fadeIn} onSubmit={handleSignUp}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <Input id="name" name="name" placeholder="John Doe" className="pl-10" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <Input id="email" name="email" placeholder="m@example.com" type="email" className="pl-10" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <Input id="password" name="password" type="password" className="pl-10" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirm Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <Input id="confirm-password" name="confirm-password" type="password" className="pl-10" required />
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:bg-blue-700 text-white" type="submit">
                        Sign Up
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.form>
                </TabsContent>
              </AnimatePresence>
            </Tabs>
          </CardContent>
          <CardFooter className="bg-gradient-to-br from-dark-blue via-black to-black">
            <p className="text-center text-gray-600">© 2024 EcoLedger. All rights reserved.</p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}
