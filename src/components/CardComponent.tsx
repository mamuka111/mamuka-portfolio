import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card'

interface CardComponentProps {
  title: string
  companyName: string
  dateFrom: string
  dateTo: string
  locationCity?: string
  locationCountry?: string
  children: React.ReactNode
}

const CardComponent = ({
  title,
  companyName,
  dateFrom,
  dateTo,
  locationCity,
  locationCountry,
  children
}: CardComponentProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {companyName} - {dateFrom} - {dateTo}{' '}
        </CardDescription>
        <CardDescription>
          {locationCity} - {locationCountry}
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export default CardComponent
