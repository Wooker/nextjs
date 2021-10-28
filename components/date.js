import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'

export default function Date({ dateString}) {
	const date = parseISO(dateString)
	return (
		<time dateTime={dateString}>{format(date, 'MMMM d, yyyy')}</time>
	)
}
