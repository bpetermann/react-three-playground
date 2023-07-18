#define PI 3.1415926535897932384626433832795
varying vec2 vUv;
uniform float uTime;

vec3 palette( float t ) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(2.0, 1.0, 0.0);
    vec3 d = vec3(0.5,0.2,0.25);

    return a + b * cos( 2.0 * PI *(c * t + d));
}

void main()
{
    vec3 finalColor = vec3(0.0);
    vec2 uv = vec2(vUv.x * vUv.y);

   for (float i = 0.0; i < 4.0; i++) {
    
    vec3 col = palette(mod(length(uv) + i * 6.0 + uTime * 0.8, 1.0));
    
    float strength = sin(length(uv) * 8.0 + uTime)/8.0;
    strength = abs(strength);

    finalColor += col * strength;
}
    gl_FragColor = vec4(finalColor, 1.0);
}