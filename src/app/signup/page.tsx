'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Zap, Mail, Lock, User, ArrowRight, LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ParticlesComponent from "@/components/ui/particles"
import { login, register } from "../../api/index.js";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin")
  const [userType, setUserType] = useState("General User") // State for user type

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 }
  }

  const handleSignIn = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const email = formData.get('email')
    const password = formData.get('password')
    const data=await login(email, password);
    if(data.success==true){
      document.location.href='/';
      console.log("Login Success");
    }
  }

  const handleSignUp = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
  
    const username = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    const confirmPassword = formData.get('confirm-password')
    const companyName = formData.get('company-name')
    const role = formData.get('user-type')

    const data=await register(username, email, password, role, companyName);
    if(data.success==true){
      document.location.href='/signup';
      console.log("Register Success");
    }


    // Include user type and company name
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
                <a href="http://localhost:3000"><TabsTrigger value="signin" >Sign In</TabsTrigger></a>
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
                        <Label htmlFor="user-type">User Type</Label>
                        <select
                          id="user-type"
                          name="user-type"
                          value={userType}
                          onChange={(e) => setUserType(e.target.value)}
                          className="block w-full border border-gray-300 text-black rounded-md p-2"
                          required
                        >
                          <option value="generalUser">General User</option>
                          <option value="energyProvider">Energy Provider</option>
                          <option value="capitalProvider">Capital Owner</option>
                        </select>
                      </div>
                      {userType === "capitalProvider" && (
                        <div className="space-y-2">
                          <Label htmlFor="company-name">Company Name</Label>
                          <div className="relative">
                            <Input id="company-name" name="company-name" placeholder="Your Company" className="pl-10" required />
                          </div>
                        </div>
                      )}
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
