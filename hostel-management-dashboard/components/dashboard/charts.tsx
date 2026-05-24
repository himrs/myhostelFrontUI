'use client'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const monthlyData = [
  { name: 'Jan', hostels: 180, approved: 45, pending: 120 },
  { name: 'Feb', hostels: 220, approved: 62, pending: 140 },
  { name: 'Mar', hostels: 310, approved: 85, pending: 180 },
  { name: 'Apr', hostels: 380, approved: 102, pending: 220 },
  { name: 'May', hostels: 420, approved: 125, pending: 250 },
  { name: 'Jun', hostels: 490, approved: 148, pending: 280 },
  { name: 'Jul', hostels: 550, approved: 172, pending: 310 },
  { name: 'Aug', hostels: 620, approved: 198, pending: 340 },
  { name: 'Sep', hostels: 710, approved: 225, pending: 380 },
  { name: 'Oct', hostels: 800, approved: 252, pending: 420 },
  { name: 'Nov', hostels: 920, approved: 280, pending: 480 },
  { name: 'Dec', hostels: 1050, approved: 310, pending: 520 },
]

const cityData = [
  { name: 'Islamabad', value: 680, color: '#7c3aed' },
  { name: 'Karachi', value: 520, color: '#8b5cf6' },
  { name: 'Lahore', value: 480, color: '#a78bfa' },
  { name: 'Peshawar', value: 320, color: '#c4b5fd' },
  { name: 'Others', value: 239, color: '#ddd6fe' },
]

const weeklyData = [
  { name: 'Mon', new: 12, verified: 8 },
  { name: 'Tue', new: 18, verified: 12 },
  { name: 'Wed', new: 15, verified: 10 },
  { name: 'Thu', new: 22, verified: 15 },
  { name: 'Fri', new: 28, verified: 18 },
  { name: 'Sat', new: 8, verified: 5 },
  { name: 'Sun', new: 5, verified: 3 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-lg">
        <p className="font-medium text-foreground mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: <span className="font-semibold">{entry.value.toLocaleString()}</span>
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function Charts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Growth Chart */}
      <Card className="shadow-sm border-border">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Hostel Growth</CardTitle>
          <CardDescription>Monthly registration trends</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="colorHostels" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorApproved" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />
                <XAxis
                  dataKey="name"
                  stroke="#9ca3af"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#9ca3af"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="hostels"
                  name="Total Hostels"
                  stroke="#7c3aed"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorHostels)"
                />
                <Area
                  type="monotone"
                  dataKey="approved"
                  name="Approved"
                  stroke="#10b981"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorApproved)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* City Distribution */}
      <Card className="shadow-sm border-border">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Distribution by City</CardTitle>
          <CardDescription>Hostels across major cities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={cityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {cityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  formatter={(value) => (
                    <span className="text-sm text-muted-foreground">{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Activity */}
      <Card className="lg:col-span-2 shadow-sm border-border">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Weekly Activity</CardTitle>
          <CardDescription>New registrations and verifications this week</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData} barGap={8}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />
                <XAxis
                  dataKey="name"
                  stroke="#9ca3af"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#9ca3af"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar
                  dataKey="new"
                  name="New Registrations"
                  fill="#7c3aed"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="verified"
                  name="Verified"
                  fill="#10b981"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
