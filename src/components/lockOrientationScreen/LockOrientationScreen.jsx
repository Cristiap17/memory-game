import { useEffect } from 'react';

const LockOrientationScreen = () => {
  useEffect(() => {
    const lockOrientation = () => {
      if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('portrait').catch(err => {
          console.error('No se pudo bloquear la rotación de la pantalla:', err);
        });
      } else if (screen.lockOrientation) {
        screen.lockOrientation('portrait');
      }
    };

    lockOrientation();

    return () => {
      if (screen.orientation && screen.orientation.unlock) {
        screen.orientation.unlock();
      } else if (screen.unlockOrientation) {
        screen.unlockOrientation();
      }
    };
  }, []);

  return null;
};

export default LockOrientationScreen;
