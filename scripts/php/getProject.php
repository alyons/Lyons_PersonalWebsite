<?php
	$q = intval($_GET['q']);

	$con = mysqli_connect("alexanderlyons.net", "website", "M3t4lG34r", "website");

	if (!$con)
	{
		die('Could not connect: ' . mysqli_error($con);
	}

	$sql = "SELECT * FROM Projects WHERE Title
?>