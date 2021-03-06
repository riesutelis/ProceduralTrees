#version 410

layout (location = 0) in vec3 position;

//uniform vec4 ambient;
uniform vec3 eyePosition;

//in vec3 normal;
layout (location = 2) in vec3 normal;
out vec4 color;

struct DirectionalLight
{
    vec3 color;
    vec3 direction;
};


/*
This shader applies a Lambert shading model and uses a directional light as single light source.
*/

void main()
{
//	if (length(normal) - 0.001f >= 1.0f)
//	{
//		color = vec4(1.0f, 0.0f, 0.0f, 1.0f);
//		return;
//	}
	// directional light properties
	DirectionalLight light;
	light.color = vec3(0.542, 0.269, 0.074);
	light.direction = vec3(2.0f, 0.5f, 3.7f);

    // ambient 
    float ambientIntensity = .5f;
    vec3 ambient = light.color * ambientIntensity;

    // diffuse
    float diffuseIntensity = 1.0f;
	vec3 diffuse = .2f * max(dot(light.direction, normal),0) * light.color * diffuseIntensity;
	
	// final colour
	vec3 intensity = ambient + diffuse;
    color = vec4(intensity, 1.0);
}