import './barchartbox.scss';
import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';

type Props = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

function BarChartBox(props: Props) {
  return (
    <div className='barChartBox'>
      <h1>{props.title}</h1>
      <div className='chart'>
        <ResponsiveContainer width='100%' height={150}>
          <BarChart width={150} height={40} data={props.chartData}>
            <Bar dataKey={props.dataKey} fill={props.color} />
            <Tooltip
              contentStyle={{ backgroundColor: '#2a3447', borderRadius: '5px' }}
              labelStyle={{ display: 'none' }}
              cursor={{fill:'none'}}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarChartBox;
