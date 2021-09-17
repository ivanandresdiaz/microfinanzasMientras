import * as React from 'react';
import { SvgPajaro } from './styledLogoPajaro';

function LogoPajaro(props) {
  return (
    <SvgPajaro
      width={76}
      height={65}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M48.321 40.583s-3.988.146-8.005-.038l.098-.375c.084-.866.11-1.728.081-2.583l3.55-9.39C47.077 17.644 33.088 3.74 33.088 3.74c-2.038 3.674-2.57 8.64-2.297 13.84C21.21 7.048 7.985 0 7.985 0 6.596 11.144 22.79 31.994 30.718 41.443c0 0 1.324 1.196-1.451 2.2l-4.275 1.331S2.398 52.213.687 54.371c0 0-1.832 1.142.487 3.427 0 0 3.666 4.954 4.644 5.968 0 0 2.075 2.286 3.786.636 0 0 14.655-13.588 19.057-15.747l2.94-.087c.693.24 15.898 1.198 29.46-8.1 0 0 2.298-2.123 5.998-4.16l.87-.5.167-.083c1.137-.753 3.514-.55 4.523-.405 1.007.146 2.014.108 2.014.108.648.073.288-.458.288-.458-.537-.496-2.309-1.133-3.658-1.568l-.2-.136c-.389-.301-1.221-1.145-1.123-2.27.225-2.565-2.692-3.266-4.937-3.733-2.244-.468-3.699-.604-3.699-.604l-.494-.134a13.022 13.022 0 00-.937-.14l-1.012-.243s-7.628-1.4-6.47-8.915c-1.007 2.59 1.533 8.288 2.053 9.341-.29.08-4.23 1.17-4.651 1.34 0 0 11.245-2.75 14.87 1.59 0 0 2.648 1.867-1.157 5.903 0 0-4.514 5.631-15.185 5.182zm6.14-14.02c.11.242.09.221-.017.005l.016-.005z'
        fill='#E80'
      />
    </SvgPajaro>
  );
}

export default LogoPajaro;
