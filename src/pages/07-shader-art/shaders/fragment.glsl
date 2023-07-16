varying vec2 vUv;
uniform float uTime;

void main()
{
    vec3 final = vec3(vUv.x, vUv.x, 1.0);

    // float strength = mod(vUv.x * vUv.y + sin(uTime * 0.2) * 8.0, 1.0);
    // strength = abs(strength);
    // strength = step(0.5, strength);

    // final += strength;

    gl_FragColor = vec4(final, 1.0);
}