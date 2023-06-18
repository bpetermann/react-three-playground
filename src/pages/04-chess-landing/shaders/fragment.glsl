varying vec2 vUv;
uniform float uTime;

void main()
{   
    float strength = floor(vUv.x * 8.0)  + floor(vUv.y * 8.0);

    strength = fract(strength * 0.5);

    strength *= 2.0;

    strength = sin(strength * 8.0 + uTime * 0.1)/8.0;
    strength = abs(strength);

    vec3 col = vec3(0.012 , 0.004, 0.02);

    col += col + strength;

    gl_FragColor = vec4(col, 1.0);

}