import React, { useContext } from "react";
import MainContext from "./../context";

export default function Right() {
	const { durum } = useContext(MainContext);

	return (
		<table className="w-[250px] border">
			<tr className="border">
				<th className="border text-red-400">Senin Tahminin</th>
				<th className="border p-2">+</th>
				<th className="p-2">-</th>
			</tr>

			{durum.map((item, index) => (
				<tr className="border" key={index}>
					<th className="border">{item.number}</th>
					<th className="border">{item.plus}</th>
					<th className="border">{item.minus}</th>
				</tr>
			))}
		</table>
	);
}
