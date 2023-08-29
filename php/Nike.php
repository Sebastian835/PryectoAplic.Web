<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $product = $_POST["product"];
    $username = $_POST["username"];
    $email = $_POST["email"];
    $size = $_POST["size"];
    $color = $_POST["color"];
    $laces_color = $_POST["laces_color"];
    $delivery_date = $_POST["delivery_date"];

    $order = "Product: $product\nUsername: $username\nEmail: $email\nSize: $size\nColor: $color\nLaces Color: $laces_color\nDelivery Date: $delivery_date\n\n";

    file_put_contents("pedidos.txt", $order, FILE_APPEND);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Add your head content here -->
</head>
<body>
    <form method="post" action="">
        <input type="hidden" name="product" value="<?php echo $_GET['product']; ?>">
        <label for="username">Username:</label>
        <input type="text" name="username" required><br>

        <label for="email">Email:</label>
        <input type="email" name="email" required><br>

        <label for="size">Size:</label>
        <select name="size">
            <option value="34">34</option>
            <option value="35">35</option>
            <!-- Add more options for sizes up to 39 -->
        </select><br>

        <label>Color:</label><br>
        <!-- Add checkboxes for color options -->
        <input type="checkbox" name="color" value="Color1"> Color1<br>
        <input type="checkbox" name="color" value="Color2"> Color2<br>
        <!-- Add more color options -->

        <label for="laces_color">Laces Color:</label>
        <input type="text" name="laces_color"><br>

        <label for="delivery_date">Delivery Date:</label>
        <input type="date" name="delivery_date"><br>

        <input type="submit" value="Place Order">
    </form>
</body>
</html>