export default function StatisticLine({ text, value }) {
	return (
		<table>
			<tbody>
				<tr>
					<td style={{ width: '70px' }}>{text}</td>
					<td>{value}</td>
				</tr>
			</tbody>
		</table>
	);
}
