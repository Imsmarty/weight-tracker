'use client';

export default function Table({ data }) {
    return (
        <table>
            <tr>
                <th>Date</th>
                <th>Weight</th>
            </tr>
            {
                data.map(el => {
                    const date = `${el.date.getFullYear()}-${el.date.getMonth() + 1}-${el.date.getDate()}`;
                    return (
                        <tr key={date}>
                            <td>{date}</td>
                            <td>{el.weight}</td>
                        </tr>
                    )
                })
            }
        </table>
    );
}