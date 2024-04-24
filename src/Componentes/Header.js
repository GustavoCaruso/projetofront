import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; 
function Header() {
    const [nome, setNome] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const usuario = localStorage.getItem("usuario");
        if (usuario) {
            const userData = JSON.parse(usuario);
            setNome(userData.funcionario.nomeCompleto);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("usuario");
        navigate("/");
    };

    const handleToggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <div className="container">
                <Navbar.Brand as={Link} to="/">SistemaRH</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarColor02" onClick={handleToggleDropdown} />
                <Navbar.Collapse id="navbarColor02" className={`${showDropdown ? 'show' : ''}`}>
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Dropdown show={showDropdown} onToggle={handleToggleDropdown}>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    {nome ? `Olá, ${nome}` : 'Usuário'}
                                </Dropdown.Toggle>

                                <Dropdown.Menu align="end">
                                    <Dropdown.Item as={Link} to="/settings">Configurações</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={handleLogout}>Sair</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default Header;
