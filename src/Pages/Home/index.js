import Header from "../../Componentes/Header";
import Footer from "../../Componentes/Footer";
import { PiNotePencilBold } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { HiBuildingOffice } from "react-icons/hi2";
import { IoCardSharp } from "react-icons/io5";


function Home() {
    return (
        <div>
            <Header />
            <br />
            <br />
            <br />
            <div className="container">
                <h1><PiNotePencilBold />Módulos</h1>
                <hr />
                <br />
                <div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <a href="pagina_destino.html" className="text-decoration-none">
                                <div className="card h-100" style={{ minHeight: '250px' }}>
                                    <div className="card-body">
                                        <h4 className="card-title" style={{ fontSize: '30px' }}>Dependente</h4> {/* Ajuste de tamanho de texto */}
                                        <FaPeopleGroup size="200px" /> {/* Ajuste de tamanho de ícone */}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <a href="pagina_destino.html" className="text-decoration-none">
                                <div className="card h-100" style={{ minHeight: '250px' }}>
                                    <div className="card-body">
                                        <h4 className="card-title" style={{ fontSize: '30px' }}>Cargo</h4> {/* Ajuste de tamanho de texto */}
                                        <HiBuildingOffice  size="200px" /> {/* Ajuste de tamanho de ícone */}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <a href="pagina_destino.html" className="text-decoration-none">
                                <div className="card h-100" style={{ minHeight: '250px' }}>
                                    <div className="card-body">
                                        <h4 className="card-title" style={{ fontSize: '30px' }}>Benefício</h4> {/* Ajuste de tamanho de texto */}
                                        <IoCardSharp size="200px" /> {/* Ajuste de tamanho de ícone */}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <a href="pagina_destino.html" className="text-decoration-none">
                                <div className="card h-100" style={{ minHeight: '250px' }}>
                                    <div className="card-body">
                                        <h4 className="card-title" style={{ fontSize: '30px' }}>Dependente</h4> {/* Ajuste de tamanho de texto */}
                                        <FaPeopleGroup size="200px" /> {/* Ajuste de tamanho de ícone */}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <a href="pagina_destino.html" className="text-decoration-none">
                                <div className="card h-100" style={{ minHeight: '250px' }}>
                                    <div className="card-body">
                                        <h4 className="card-title" style={{ fontSize: '30px' }}>Cargo</h4> {/* Ajuste de tamanho de texto */}
                                        <HiBuildingOffice  size="200px" /> {/* Ajuste de tamanho de ícone */}
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <a href="pagina_destino.html" className="text-decoration-none">
                                <div className="card h-100" style={{ minHeight: '250px' }}>
                                    <div className="card-body">
                                        <h4 className="card-title" style={{ fontSize: '30px' }}>Benefício</h4> {/* Ajuste de tamanho de texto */}
                                        <IoCardSharp size="200px" /> {/* Ajuste de tamanho de ícone */}
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>



                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Home