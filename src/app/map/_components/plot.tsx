// @ts-nocheck
import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import { delhi_geojson } from '../_GeoJsonData/delhi';
const City_plot = ({ City }: { City: string }) => {
	const [data, setData] = useState([]);
	const [layout, setLayout] = useState({});
	const [loading, setLoading] = useState(true);

	function csvColumnToArray(csvData, columnNumber) {
		const rows = csvData.split('\n');
		const columnArray = [];

		for (let i = 0; i < rows.length; i++) {
			const row = rows[i].split(',');
			if (row.length > columnNumber) {
				const value = row[columnNumber].trim();
				columnArray.push(value);
			}
		}
		return columnArray;
	}

	useEffect(() => {
		async function getCsv(City) {
			try {
				const response = await fetch(`${City}.csv`);

				if (!response.ok) {
					return <h1>City not supported</h1>;
				}

				const csvData = await response.text();

				const Pincode = csvColumnToArray(csvData, 9);
				Pincode.shift();

				const District = csvColumnToArray(csvData, 0);
				District.shift();

				const data = [
					{
						type: 'choroplethmapbox',
						geojson: delhi_geojson,
						featureidkey: 'properties.Dist_Name',
						colorbar: {
							bgcolor: '#0e1117',
							outlinewidth: 0,
							bordercolor: '#0e1117',
							title: {
								text: 'Pincode',
							},
						},
						locations: District,
						color_continuous_scale: 'OrRd',
						z: Pincode,
						zmax: 115,
						zmin: 0,
						autocolorscale: true,
					},
				];

				const layout = {
					mapbox: {
						style: 'carto-darkmatter',
						center: { lat: 28.6139, lon: 77.109 },
						zoom: 8,
					},
					width: 800,
					height: 600,
					margin: { t: 0, b: 0, l: 0, r: 0 },
				};

				setData(data);
				setLayout(layout);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching file:', error);
			}
		}

		getCsv(City);
	}, [City]);

	if (loading) {
		return <div>Loading data...</div>;
	}

	return <Plot data={data} layout={layout} />;
};

export default City_plot;
