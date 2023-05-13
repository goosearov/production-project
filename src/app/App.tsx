import './styles/index.scss'
import {Link} from "react-router-dom";
import {classNames} from "shered/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "./providers/router";
import {Navbar} from "widgets/Navbar";



const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />

        </div>
    );
};

export default App;