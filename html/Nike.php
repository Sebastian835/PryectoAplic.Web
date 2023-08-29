<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $shoeSize = $_POST["shoe_size"];
    $shoeColor = $_POST["shoe_color"];
    $deliveryDate = $_POST["delivery_date"];
    $requisitos = $_POST["requisitos"];

    $orderInfo = "Nombres Completos: $name\nEmail: $email\nTalla de Zapato: $shoeSize\nColor de Zapato: $shoeColor\nFecha de Entrega: $deliveryDate\nRequisitos Extras: $requisitos\n\n";

    if (file_put_contents("pedidos.txt", $orderInfo, FILE_APPEND)) {
        $successMessage = "Su pedido se realizó con éxito. Le enviaremos un correo de confirmación";
    } else {
        $errorMessage = "Hubo un error al procesar su pedido. Por favor, inténtelo nuevamente.";
    }
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pedidos</title>
    <link rel="stylesheet" href="../css/styles_Sneakers.css">
    <link rel="stylesheet" href="../css/bootstrap/bootstrap.min.css">
</head>
<body>
<header id="headerHome" class="row tex-center justify-content-around p-3">
        <div>
            <center><a href="home.html"><img src="../img/StockXLogo.svg.png" width="200px" height="40px" /></a></center>
        </div>
</header>

<div class="container">

        <section id="navbar" class="row p-2 text-center">
            <div class="col-3 navbar-link d-flex align-items-center justify-content-center">
                <a href="home.html" class="font-weight-light link-unstyled">Home</a>
            </div>
            <div class="col-3 navbar-link d-flex align-items-center justify-content-center">
                <a href="Sneakers.html" class="font-weight-light link-unstyled">Sneakers</a>
            </div>
            <div class="col-3 navbar-link d-flex align-items-center justify-content-center">
                <a href="Nike.html" class="font-weight-light link-unstyled">Nike</a>
            </div>
            <div class="col-3 navbar-link d-flex align-items-center justify-content-center">
                <a href="Contact_Us.html" class="font-weight-light link-unstyled">Contact Us</a>
            </div>
        </section>
        <br>
</div>    
<div class="container mt-5">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <h2>Realice su Pedido Personalizado</h2>
                <form method="POST">

                    <div class="form-group">
                        <label for="name">Nombres Completos</label>
                        <input type="text" class="form-control" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="shoe_size">Talla de Zapato</label>
                        <select class="form-control" id="shoe_size" name="shoe_size" required>
                            <option value="34">34</option>
                            <option value="35">35</option>
                            <option value="36">36</option>
                            <option value="37">37</option>
                            <option value="38">38</option>
                            <option value="39">39</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="shoe_color">Color de Zapato</label>
                        <select class="form-control" id="shoe_color" name="shoe_color" required>
                            <option value="verde">Verde</option>
                            <option value="rojo">Rojo</option>
                            <option value="azul">Azul</option>
                            <option value="negro">Negro</option>
                            <option value="celeste">Celeste</option>
                            <option value="blanco">Blanco</option>
                        </select>
                    </div>
                   
                    <div class="form-group">
                        <label for="delivery_date">Fecha que desea su pedido</label>
                        <input type="date" class="form-control" id="delivery_date" name="delivery_date" required>
                    </div>
                    <div class="form-group">
                        <label for="requisitos">Requisitos para personalizar tu zapato</label>
                        <textarea name="requisitos" id="requisitos" cols="68" rows="5"></textarea>
                    </div>
                    <br><br>
                    <button type="submit" class="btn btn-primary">Enviar Pedido</button>

                    <a href="Nike.html" class="btn btn-secondary">Volver</a>
                </form>
            </div>
        </div>
    </div>
    <?php
if (isset($successMessage)) {
    echo '<div class="alert alert-success" role="alert">' . $successMessage . '</div>';
} elseif (isset($errorMessage)) {
    echo '<div class="alert alert-danger" role="alert">' . $errorMessage . '</div>';
}
?>
<br><br>
    <!-- Include Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

<div class="row">
    <div class="col col-12">
        <div class="container my-5">
            <footer class="text-center text-lg-start text-white" style="background-color: #1c2331">
                <section class="">
                    <div class="container text-center text-md-start mt-5">
                        <!-- Grid row -->
                        <div class="row mt-3">
                            <!-- Grid column -->
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <!-- Content -->
                                <h6 class="text-uppercase fw-bold">StockX</h6>
                                <hr class="mb-4 mt-0 d-inline-block mx-auto"
                                    style="width: 60px; background-color: #7c4dff; height: 2px" />
                                <p>
                                    Los mejores zapatos, las mejores ofertas. StockX: tu destino
                                    para encontrar la zapatilla
                                    perfecta.
                                </p>
                            </div>
                            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <!-- Links -->
                                <h6 class="text-uppercase fw-bold">Products</h6>
                                <hr class="mb-4 mt-0 d-inline-block mx-auto"
                                    style="width: 60px; background-color: #7c4dff; height: 2px" />
                                <p>
                                    <a href="../html/Sneakers.html" class="text-white">Sneakers</a>
                                </p>
                                <p>
                                    <a href="../html/shopping cart.html" class="text-white">Shopping Cart</a>
                                </p>
                            </div>
                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold">Useful links</h6>
                                <hr class="mb-4 mt-0 d-inline-block mx-auto"
                                    style="width: 60px; background-color: #7c4dff; height: 2px" />
                                <p>
                                    <a href="#!" class="text-white">Your Account</a>
                                </p>
                                <p>
                                    <a href="#!" class="text-white">Become an Affiliate</a>
                                </p>
                            </div>

                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <!-- Links -->
                                <h6 class="text-uppercase fw-bold">Contact</h6>
                                <hr class="mb-4 mt-0 d-inline-block mx-auto"
                                    style="width: 60px; background-color: #7c4dff; height: 2px" />
                                <p><i class="fas fa-home mr-3"></i> Quito - Ecuador</p>
                                <p><i class="fas fa-envelope mr-3"></i> support@stockX.com</p>
                                <p><i class="fas fa-phone mr-3"></i> (021)-241454-545</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
                    © 2023 Copyright
                </div>
            </footer>
        </div>
    </div>
</div>
</html>