<?php
	function formatProjectOverlay($title, $role, $projectURL, $description, $collaborators)
	{
		$output = "<div class=\"container overlay-container\">
				<h2 id=\"overlayProjectTitle\" style=\"margin-left: 8px;\">$title</h2>
				<div class=\"two-thirds column project-description scrollbar\" id=\"project-description\">
					$description
				</div>
				<div class=\"one-third column\">
					<p>Image</p>
					<p><a href=\"$projectURL\" target=\"_blank\">$title</a></p>
					<p>Role: $role</p>
					<p>Collaborators: $collaborators</p>
					<button onclick=\"toggleOverlay()\">Hide Overlay</button>
				</div>
			</div>";
		return $output;
	}
	
	function formatProjectButton($title, $role, $shortDescription)
	{
		$output = "<button class=\"projectButton\">
							<h3>$title</h3>
							<p>Role(s): $role</p>
							$shortDescription
							</button>";
		
		return output;
	}
	
	function GetAllProjects()
	{
		$con = mysqli_connect("alexanderlyons.net", "website", "M3t4lG34r", "website");

		if (mysqli_connect_errno())
		{
			echo "Failed to connect to MySQL: " . mysqli_connect_error();
		}
		
		$result = mysqli_query($con, "SELECT * FROM Projects");
		
		mysqli_close($con);
		
		return $result;
	}
	
	function GetProject($id)
	{
		$con = mysqli_connect("alexanderlyons.net", "website", "M3t4lG34r", "website");

		if (mysqli_connect_errno())
		{
			echo "Failed to connect to MySQL: " . mysqli_connect_error();
		}
		
		$result = mysqli_query($con, "SELECT * FROM Projects WHERE ID=$id");
		
		mysqli_close($con);
		
		return $result;
	}
	
	function testFunction()
	{
		$result = GetProject(1);
		
		$row = mysqli_fetch_array($result);
		
		echo formatProjectButton($row['Title'], $row['Role'], $row['ShortDescription']);
	}
	
	function simpleFunction()
	{
		echo "Metal Gear!";
	}
?>