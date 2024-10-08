"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Bell, Download, ExternalLink } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { AreaChart, LineChart, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area, Line, Bar } from 'recharts'

// Mock data
const energyData = [
  { date: "2023-01", Solar: 100, Wind: 80, Hydro: 60 },
  { date: "2023-02", Solar: 120, Wind: 100, Hydro: 70 },
  { date: "2023-03", Solar: 140, Wind: 90, Hydro: 80 },
  { date: "2023-04", Solar: 160, Wind: 110, Hydro: 90 },
  { date: "2023-05", Solar: 180, Wind: 130, Hydro: 100 },
  { date: "2023-06", Solar: 200, Wind: 150, Hydro: 110 },
]

const recData = [
  { id: 1, quantity: 100, status: "Certified", expiry: "2024-12-31" },
  { id: 2, quantity: 50, status: "Pending", expiry: "2024-06-30" },
  { id: 3, quantity: 75, status: "Certified", expiry: "2025-03-31" },
]

const eNftData = [
  { id: 1, quantity: 10, yield: "5.5%", maturity: "2025-12-31" },
  { id: 2, quantity: 5, yield: "6.0%", maturity: "2026-06-30" },
  { id: 3, quantity: 8, yield: "5.8%", maturity: "2025-09-30" },
]

const transactionHistory = [
  { date: "2023-06-01", type: "Buy", quantity: 50, price: "$10.5", fees: "$2.5" },
  { date: "2023-05-28", type: "Sell", quantity: 30, price: "$11.2", fees: "$1.8" },
  { date: "2023-05-25", type: "Mint", quantity: 100, price: "-", fees: "$5.0" },
]

const energyProviders = [
  { name: "SunPower Solutions", location: "California, USA", type: "Solar", output: "500 MW" },
  { name: "WindWave Energy", location: "Texas, USA", type: "Wind", output: "300 MW" },
  { name: "HydroFlow Inc.", location: "Washington, USA", type: "Hydro", output: "250 MW" },
]

const recMarketData = [
  { date: "2023-01", price: 10 },
  { date: "2023-02", price: 12 },
  { date: "2023-03", price: 11 },
  { date: "2023-04", price: 13 },
  { date: "2023-05", price: 15 },
  { date: "2023-06", price: 14 },
]

const eNftBondData = [
  { bond: "1Y", yield: 5.5 },
  { bond: "2Y", yield: 6.0 },
  { bond: "3Y", yield: 6.2 },
  { bond: "5Y", yield: 6.5 },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            EcoLedger Dashboard
          </span>
        </h1>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    john.doe@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Account Overview */}
        <Card className="col-span-full bg-gradient-to-r from-black via-gray-900 to-black">
          <CardHeader>
            <CardTitle>Account Overview</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between">
            <div>
              <p className="text-sm text-gray-400">Account Balance</p>
              <p className="text-2xl font-bold">$10,234.56</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">REC Holdings</p>
              <p className="text-2xl font-bold">225</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">e-NFT Bonds</p>
              <p className="text-2xl font-bold">23</p>
            </div>
          </CardContent>
        </Card>

        {/* Energy Generation Overview */}
        <Card className="col-span-full bg-gradient-to-r from-black via-gray-900 to-black">
          <CardHeader>
            <CardTitle>Energy Generation Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="Solar" stackId="1" stroke="#66BB6A" fill="#66BB6A" />
                <Area type="monotone" dataKey="Wind" stackId="1" stroke="#00CED1" fill="#00CED1" />
                <Area type="monotone" dataKey="Hydro" stackId="1" stroke="#1E90FF" fill="#1E90FF" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* REC Holdings */}
        <Card className="bg-gradient-to-r from-black via-gray-900 to-black">
          <CardHeader>
            <CardTitle>REC Holdings</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Expiry</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recData.map((rec) => (
                  <TableRow key={rec.id}>
                    <TableCell>{rec.quantity}</TableCell>
                    <TableCell>
                      <Badge variant={rec.status === "Certified" ? "default" : "secondary"}>
                        {rec.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{rec.expiry}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* e-NFT Bonds */}
        <Card className="bg-gradient-to-r from-black via-gray-900 to-black">
          <CardHeader>
            <CardTitle>e-NFT Bonds</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Yield</TableHead>
                  <TableHead>Maturity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {eNftData.map((nft) => (
                  <TableRow key={nft.id}>
                    <TableCell>{nft.quantity}</TableCell>
                    <TableCell>{nft.yield}</TableCell>
                    <TableCell>{nft.maturity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Market Overview */}
        <Card className="col-span-full bg-gradient-to-r from-black via-gray-900 to-black">
          <CardHeader>
            <CardTitle>Market Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-semibold mb-2">REC Market Prices</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={recMarketData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="price" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">e-NFT Bond Market</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={eNftBondData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bond" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="yield" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transaction History */}
        <Card className="col-span-full bg-gradient-to-r from-black via-gray-900 to-black">
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Fees</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactionHistory.map((transaction, index) => (
                  <TableRow key={index}>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.type}</TableCell>
                    <TableCell>{transaction.quantity}</TableCell>
                    <TableCell>{transaction.price}</TableCell>
                    <TableCell>{transaction.fees}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Energy Providers */}
        <Card className="col-span-full bg-gradient-to-r from-black via-gray-900 to-black">
          <CardHeader>
            <CardTitle>Energy Providers</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Output</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {energyProviders.map((provider, index) => (
                  <TableRow key={index}>
                    <TableCell>{provider.name}</TableCell>
                    <TableCell>{provider.location}</TableCell>
                    <TableCell>{provider.type}</TableCell>
                    <TableCell>{provider.output}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Verification and Transparency */}
        <Card className="col-span-full md:col-span-1 bg-gradient-to-r from-black via-gray-900 to-black">
          <CardHeader>
            <CardTitle>Data Verification Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Badge variant="default">Verified</Badge>
              <span>Last updated: 2023-06-15 14:30 UTC</span>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Energy data verified by Chainlink oracles
            </p>
          </CardContent>
        </Card>
        {/* Investment Insights */}
        <Card className="col-span-full md:col-span-1 bg-gradient-to-r from-black via-gray-900 to-black">
          <CardHeader>
            <CardTitle>Investment Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-400 mb-2">Projected Annual Yield</p>
            <p className="text-2xl font-bold">7.5%</p>
            <Button className="mt-4" variant="outline">
              View Detailed Projections
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Features */}
      <Card className="mt-8 bg-gradient-to-r from-black via-gray-900 to-black">
        <CardHeader>
          <CardTitle>Dashboard Filters</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button variant="outline">Solar</Button>
          <Button variant="outline">Wind</Button>
          <Button variant="outline">Hydro</Button>
          <Button variant="outline">Last 30 Days</Button>
          <Button variant="outline">Last 6 Months</Button>
          <Button variant="outline">Year to Date</Button>
        </CardContent>
      </Card>
    </div>
  )
}