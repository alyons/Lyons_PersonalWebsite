function defaultLoad()
{
	showHomeContent();
}

function showHomeContent()
{
	document.getElementById("home").style.display="block";
	document.getElementById("projects").style.display="none";
	document.getElementById("about").style.display="none";
	document.getElementById("contact").style.display="none";
}

function showProjectsContent()
{
	document.getElementById("home").style.display="none";
	document.getElementById("projects").style.display="block";
	document.getElementById("about").style.display="none";
	document.getElementById("contact").style.display="none";
}

function showAboutContent()
{
	document.getElementById("home").style.display="none";
	document.getElementById("projects").style.display="none";
	document.getElementById("about").style.display="block";
	document.getElementById("contact").style.display="none";
}

function showContactContent()
{
	document.getElementById("home").style.display="none";
	document.getElementById("projects").style.display="none";
	document.getElementById("about").style.display="none";
	document.getElementById("contact").style.display="block";
}

function showTestOverlay()
{
	var overlay = document.createElement("div");
	overlay.setAttribute("id","overlay");
	overlay.setAttribute("class","overlay");
	
	var header = document.createElement("h2");
	header.innerHTML = "Project Title";
	overlay.appendChild(header);
	
	var description = document.createElement("div");
	description.setAttribute("class","two-thirds column");
	decription.innerHTML = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis leo in turpis semper dapibus. Etiam nec est ultricies velit condimentum imperdiet. Sed et ultrices orci. Aenean blandit dapibus augue nec pellentesque. Nulla sodales nisi vitae ipsum gravida, in hendrerit lectus ornare. Duis eu ornare sem, a ornare ante. Proin auctor nec felis et ultricies. Aliquam metus felis, aliquam vel rutrum sagittis, pretium nec tellus. Nullam convallis lorem iaculis dui mattis, eu bibendum risus mattis. Curabitur vel arcu ac velit gravida lacinia.</p>						<p>Integer vehicula purus sed rhoncus commodo. Aenean eros sapien, gravida in mi ut, auctor auctor felis. Nam aliquet consectetur sagittis. Vestibulum ultrices odio nec arcu malesuada suscipit. Etiam lacus nibh, tempus et pharetra vitae, auctor ac mi. Aliquam faucibus purus convallis felis malesuada fringilla. Donec venenatis justo id dui porttitor placerat. Pellentesque congue justo odio, sit amet dapibus libero elementum non. Vestibulum cursus dignissim sem ultricies interdum. Sed ultricies purus eget nulla pharetra, mollis viverra urna imperdiet. Fusce convallis mattis quam, in fermentum quam interdum eu. Nam odio augue, fermentum ornare pellentesque nec, volutpat ut sem. Sed ornare arcu et malesuada lobortis. Aliquam erat volutpat. Duis rutrum, erat quis interdum facilisis, nunc arcu blandit libero, suscipit egestas mi velit a massa.</p>						<p>Pellentesque consectetur lacus accumsan augue sagittis, at lobortis augue pulvinar. Maecenas elit dui, sodales nec sem consectetur, porttitor vestibulum dolor. Curabitur nec tincidunt quam, sit amet sodales metus. Fusce feugiat massa facilisis lorem tempus posuere. Nulla cursus, sapien elementum fringilla dapibus, massa elit scelerisque felis, non ultricies tortor metus facilisis lacus. Nam mollis tellus quis massa viverra, vitae blandit dolor varius. Nunc sem tortor, tincidunt id dui nec, gravida volutpat mi. Etiam iaculis imperdiet augue eget tempus. Fusce tellus elit, porta non odio a, volutpat mollis enim.</p>						<p>Phasellus euismod egestas turpis, a tempor sem ullamcorper condimentum. Aenean congue pulvinar tellus id tempus. In hac habitasse platea dictumst. Donec vestibulum et dolor eu blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id ante nec purus mattis adipiscing. Etiam posuere turpis et est pulvinar malesuada. Fusce hendrerit, nisi non iaculis ultrices, leo nulla dapibus erat, sit amet aliquet mauris eros ut nisl. Maecenas at est ornare, convallis diam vel, feugiat nibh.</p>						<p>Nam vel est gravida, commodo est sed, facilisis neque. Suspendisse lobortis lectus sit amet ultrices convallis. Sed leo ligula, hendrerit eget nunc nec, pharetra pellentesque elit. Donec ultricies tellus eget quam tempor, egestas faucibus dui pretium. Duis et quam ac nisi vestibulum tristique at non tortor. Nulla at lacus arcu. Phasellus auctor mauris eget metus auctor, eget congue diam porta. Vivamus dictum turpis lacinia leo egestas, a facilisis augue ultricies. Cras sed consectetur ligula, eu mollis velit.</p>";
	overlay.appendChild(description);
	
	var sideBar = document.createElement("div");
	sideBar.setAttribute("class", "one-third column omega");
	sideBar.innerHTML = "<p>Image</p><p>Link</p><p>Role</p><p>Collaborators</p><p>Miscellaneous</p>";
	overlay.appendChild(sideBar);
	
	document.body.appendChild(overlay);
}

function showOverlay(projectName)
{
	var xmlhttp;
	
	if (window.XMLHttpRequest)
	{
		xmlhttp = new XMLHttpRequest();
	}
	else
	{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange = function()
	{
		if (xmlhttp.readystate == 4 && xmlhttp.status == 200)
		{
			//document.get
		}
	}

	document.getElementById("overlayProjectTitle").innerHTML = projectName;
	toggleOverlay();
}

function toggleOverlay()
{
	var overlay = document.getElementById("overlay");
	var overlayBox = document.getElementById("overlayBox");
	
	if (overlay.style.display == "block")
	{
		overlay.style.display = "none";
		overlayBox.style.display = "none";
	}
	else
	{
		overlay.style.display = "block";
		overlayBox.style.display = "block";
	}
}