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
    float values = 1.0 - step(0.01, abs(distance(vec2(
        vUv.x + sin(vUv.y * uTime * 5.0) * 0.1,
        vUv.y + sin(vUv.x * uTime * 5.0) * 0.1
    ), vec2(0.5)) -0.25));

    vec3 black = vec3(0.051);
    vec3 colored = vec3(vUv, palette(uTime * 0.1));
    vec3 white = vec3(1.0);
    vec3 mixedColor = mix(black, colored, values);

    gl_FragColor = vec4(mixedColor, 1.0);

}