varying vec2 vUv;

uniform float uTime;



void main()
{
    float strength = floor(vUv.x * 8.0)  + floor(vUv.y * 8.0);

    strength = fract(strength * 0.5);

    strength *= 2.0;

    gl_FragColor = vec4(strength, strength, strength, 1.0);

}