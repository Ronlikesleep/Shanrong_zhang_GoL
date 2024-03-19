import MultiGrids from '../Component/MultiGrids.jsx'
import ClassNameProvider from '../State/ClassNameProvider.jsx'
import ShowCoundNumber from '../State/ShowCountNumber';
import BlackGridCountProvider from '../State/BlackGridCountProvider.jsx';
import GridSizeProvider from '../State/GridSizeProvider.jsx';
import InputHandle from '../Component/InputHandle.jsx';
import Nav from './../Component/Nav'
export default function Gameplay() {
    return (<div>
        <Nav />

        <GridSizeProvider>
            <InputHandle />
            <ClassNameProvider>
                <BlackGridCountProvider>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 0,
                        padding: 0,
                    }}>
                        <ShowCoundNumber />
                    </div>
                    <MultiGrids />
                </BlackGridCountProvider>
            </ClassNameProvider>

        </GridSizeProvider>

    </div >);
}