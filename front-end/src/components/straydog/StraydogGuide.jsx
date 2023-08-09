import './StraydogGuide.css';

const StraydogGuide = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '200px' }}>
            <h1 style={{paddingBottom : '50px', fontFamily : 'GmarketSansMedium'}}>| 입양가이드 |</h1>

            <table>
                <tr>
                    <td className='boxs'><div className="guide"></div></td>
                    <td className='boxs'><div className="guide"></div></td>
                </tr>
                <tr>
                    <td className='boxs'><div className="guide"></div></td>
                    <td className='boxs'><div className="guide"></div></td>
                </tr>
            </table>

        </div>
    );
};
export default StraydogGuide