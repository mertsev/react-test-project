import React from "react";
import { Drawer, MenuItem, AppBar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

interface ParentProps {
    classes: any;
}

interface ParentState {
    open: boolean;
}

export default class Sidebar extends React.Component<ParentProps, ParentState> {
    constructor(props: any) {
        super(props);

        this.state = { 
            open: false 
        };
    }

    handleToggle = () => {
        let isOpen = !this.state.open;
        this.setState({ 
            open: isOpen
        });
    }

    handleClose = () => {
        this.setState({ 
            open: false 
        });
    }

    render() {
        return (
            <div>
                <IconButton
                    edge="start"
                    className={this.props.classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.handleToggle}
                >
                    <MenuIcon />
                </IconButton>
                <Drawer
                    open={this.state.open}
                    onClick={this.handleClose}
                    className={this.props.classes.sidebar}
                >
                    <AppBar title="AppBar" />
                    <MenuItem>
                        <Link to='/spark/test'>Вход в СберСпарк</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/'>Список организаций</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/spark/page'>Поиск по ИНН</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/spark/draft'>Драфт</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to='/spark/home/1'>Инфо "Роснефть"</Link>
                    </MenuItem>
                </Drawer>
            </div>
        );
    }
}
