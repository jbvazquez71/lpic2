const preguntasLPIC2_1_201_400_V12_25 = [
    {
        "question": "1. El archivo de configuración principal de autofs contiene esta entrada: '/home /etc/auto.home'. ¿Cuál es el significado del archivo /etc/auto.home?",
        "options": [
            "A. Contiene los mapas indirectos para el montaje de sistemas de archivos.",
            "B. Contiene información de configuración, como contraseñas y claves, para el servidor de archivos remoto.",
            "C. Contiene información de configuración sobre los ajustes para el punto de montaje /home.",
            "D. Contiene la clave SSL para permitir la autenticación en el servidor de archivos remoto."
        ],
        "answer": "A",
        "explicacion": "En autofs, el archivo maestro (/etc/auto.master) asocia un punto de montaje con un archivo de mapa (en este caso /etc/auto.home), el cual contiene los mapas indirectos que definen cómo se montan los subdirectorios bajo demanda.",
        "pista": "Recuerda la relación entre el archivo maestro y los archivos de mapa (maps) en la configuración de montajes automáticos."
    },
    {
        "question": "2. ¿Dónde colocaría fsck cualquier archivo sin referencia o fragmentos de archivos en un sistema de archivos ext4?",
        "options": [
            "A. recover",
            "B. lost+found",
            "C. back",
            "D. lost"
        ],
        "answer": "B",
        "explicacion": "El comando fsck (File System Check) mueve los archivos recuperados que no tienen un nombre o ubicación clara al directorio 'lost+found' en la raíz de la partición.",
        "pista": "Es un directorio estándar en sistemas Unix/Linux para datos recuperados."
    },
    {
  "question": "3. ¿Por qué el sistema de archivos raíz se monta como solo lectura durante el arranque y se vuelve a montar con permisos de escritura más tarde?",
  "options": [
    "A. Porque si se detectan problemas en el sistema de archivos raíz durante el arranque, se puede ejecutar fsck sin riesgo de daños.",
    "B. Porque de esta manera los atacantes (crackers) no pueden recopilar información sobre root con rastreadores de arranque (boot sniffers).",
    "C. Para evitar escribir en el disco, a menos que se conozca la contraseña de root.",
    "D. Para evitar que otros sistemas operativos sobrescriban la partición raíz de Linux.",
    "E. Porque el disco tiene su propia protección contra escritura que no puede ser cambiada por el sistema operativo."
  ],
  "answer": "A",
  "explicacion": "Ejecutar fsck en un sistema de archivos montado con permisos de lectura/escritura es extremadamente peligroso y puede corromper los datos. Al montarlo inicialmente como solo lectura (ro), el sistema puede verificar y reparar la integridad de la partición raíz de forma segura antes de iniciar los servicios normales.",
  "pista": "Piensa en la seguridad de los datos al reparar errores del disco con fsck."
    },
    {
  "question": "4. ¿Cuál de las siguientes opciones describe mejor el formato del archivo /etc/fstab?",
  "options": [
    "A. nombre de dispositivo; tipo de sistema de archivos; punto de montaje; opciones de montaje; volcado; orden de fsck",
    "B. nombre de dispositivo; punto de montaje; tipo de sistema de archivos; opciones de montaje; volcado; orden de fsck",
    "C. nombre de dispositivo; punto de montaje; opciones de montaje; tipo de sistema de archivos; volcado; orden de fsck",
    "D. punto de montaje; tipo de sistema de archivos; nombre de dispositivo; opciones de montaje; volcado; orden de fsck",
    "E. punto de montaje; nombre de dispositivo; tipo de sistema de archivos; opciones de montaje; volcado; orden de fsck"
  ],
  "answer": "B",
  "explicacion": "El orden estándar de las columnas en fstab es: 1. Dispositivo (UUID/Etiqueta), 2. Punto de montaje, 3. Sistema de archivos, 4. Opciones, 5. Dump (volcado) y 6. Pass (orden de fsck).",
  "pista": "Recuerda el orden: ¿A dónde va el dispositivo antes de saber qué tipo de archivos tiene?"
    },
    {
  "question": "5. ¿Qué sucede si el núcleo (kernel) de Linux no puede montar el sistema de archivos raíz al arrancar?",
  "options": [
    "A. Se muestra un mensaje de error y el kernel pide al administrador que especifique un sistema de archivos raíz válido para continuar.",
    "B. Se muestra un mensaje de error y el sistema se reinicia tras pulsar una tecla.",
    "C. Se muestra un mensaje de error y el sistema arranca en modo de mantenimiento.",
    "D. Se muestra un mensaje de error indicando qué dispositivo no pudo montarse o informando que no se pudo encontrar 'init'.",
    "E. Se muestra un mensaje de error indicando que el módulo del kernel correspondiente no pudo cargarse."
  ],
  "answer": "D",
  "explicacion": "Si el kernel falla al montar la raíz, se produce un 'Kernel Panic'. El mensaje detallará el fallo del dispositivo o la ausencia del proceso 'init', que es el primer proceso que el kernel intenta ejecutar tras montar la raíz.",
  "pista": "Busca el término técnico relacionado con el fallo del primer proceso del sistema."
    },
    {
  "question": "6. Después de muchas operaciones de escritura, el administrador quiere asegurarse de que el núcleo vuelque los búferes del sistema de archivos al disco. ¿Qué comando logrará esto? (Solo el comando)",
  "options": [],
  "answer": "sync",
  "explicacion": "El comando 'sync' obliga al sistema a escribir todos los datos que están temporalmente en la memoria (búferes) directamente en el almacenamiento físico.",
  "pista": "Sincronizar memoria y disco."
    },
    {
  "question": "7. ¿Qué directorio en /dev/disk/ puede usarse para determinar el UUID de un disco duro conectado? (Solo el directorio)",
  "options": [],
  "answer": "/dev/disk/by-uuid",
  "explicacion": "El directorio '/dev/disk/by-uuid' contiene enlaces simbólicos cuyos nombres son los UUIDs de las particiones del sistema.",
  "pista": "Ruta dentro de /dev que clasifica discos por su identificador único."
    },
    {
  "question": "8. ¿Cuál de las siguientes es una ruta de ejemplo para un array RAID por software en Linux?",
  "options": [
    "A. /dev/raid0",
    "B. /dev/rd1",
    "C. /dev/pr0",
    "D. /dev/md1"
  ],
  "answer": "D",
  "explicacion": "En Linux, los dispositivos de disco múltiple (software RAID) son gestionados por el controlador 'md' (Multiple Device) y aparecen como /dev/mdX.",
  "pista": "Piensa en el nombre del driver 'Multiple Device'."
    },
    {
  "question": "9. ¿Qué programa muestra información sobre archivos y conexiones de red abiertos por procesos? (Solo el comando)",
  "options": [],
  "answer": "lsof",
  "explicacion": "El comando 'lsof' (LiSt Open Files) es una herramienta que informa sobre todos los archivos que tienen abiertos los procesos en ejecución, incluyendo sockets de red.",
  "pista": "Abreviatura de 'List Open Files'."
    },
    {
  "question": "10. ¿Cuál de los siguientes términos se utilizan para describir los lanzamientos del kernel 3.x? (Elige dos)",
  "options": [
    "A. beta",
    "B. final",
    "C. longterm",
    "D. prerelease",
    "E. stable"
  ],
  "answer": "C, E",
  "explicacion": "The Linux Kernel Organization categoriza sus versiones principalmente como 'stable' (estables para uso general) y 'longterm' (con soporte de mantenimiento extendido por varios años).",
  "pista": "Piensa en las categorías oficiales de soporte en kernel.org."
    },
    {
  "question": "11. ¿Cuál de los siguientes comandos copiará de forma segura el directorio ./fyf/ a /var/tmp/ en el host remoto 'deltaur' usando la cuenta de usuario 'kevin'?",
  "options": [
    "A. rsync -a -e ssh kevin@deltaur:/var/tmp/ fyf/",
    "B. rsync -a -u kevin -e ssh fyf/ deltaur:/var/tmp/",
    "C. rsync -a -u kevin -e ssh deltaur:/var/tmp/ fyf/",
    "D. rsync -a -e ssh fyf/ kevin@deltaur:/var/tmp/"
  ],
  "answer": "D",
  "explicacion": "La sintaxis correcta de rsync es 'rsync [opciones] origen destino'. Para el destino remoto, se usa el formato 'usuario@host:ruta'.",
  "pista": "Primero el origen local, luego el destino remoto con el usuario."
    },
    {
  "question": "12. ¿Cuál de los siguientes directorios NO debería incluirse en una copia de seguridad (backup)?",
  "options": [
    "A. /backup",
    "B. /etc",
    "C. /opt",
    "D. /proc",
    "E. /var/log"
  ],
  "answer": "D",
  "explicacion": "El directorio /proc es un sistema de archivos virtual generado por el kernel en memoria. No contiene archivos reales en el disco y su contenido cambia constantemente, por lo que no tiene sentido respaldarlo.",
  "pista": "Piensa en directorios virtuales que solo existen mientras el sistema está encendido."
    },
    {
  "question": "13. ¿Cuál es el comando para agregar otra dirección IP (192.168.1.2) a una interfaz de red (eth0) que ya tiene al menos una dirección IP en la subred 192.168.1.0/24?",
  "options": [
    "A. ip add addr 192.168.1.2/32 dev eth0",
    "B. ifconfig eth0 192.168.1.2 netmask 255.255.255.255",
    "C. ip addr add 192.168.1.2/32 dev eth0",
    "D. ipconfig eth0 192.168.1.2"
  ],
  "answer": "C",
  "explicacion": "El comando moderno para gestionar redes en Linux es 'ip'. Para añadir una dirección, se usa 'ip addr add [IP/máscara] dev [interfaz]'.",
  "pista": "El comando empieza por 'ip' y utiliza 'addr add'."
    },
    {
  "question": "14. ¿Qué archivo contiene el mensaje de texto que se muestra después de iniciar sesión en la consola? (Especifique la ruta completa)",
  "options": [],
  "answer": "/etc/motd",
  "explicacion": "El archivo /etc/motd (Message Of The Day) se utiliza habitualmente para mostrar anuncios o avisos legales a los usuarios tras un login exitoso.",
  "pista": "Acrónimo de 'Message Of The Day'."
    },
    {
    "question": "15. Basado en el archivo /etc/fstab proporcionado:\n/dev/hdal swap swap defaults 0 0\n/dev/hda2 / ext2 defaults 1 1\n/dev/hda3 /home ext2 defaults 1 2 none /proc proc defaults 0 0\n/dev/sdbl /media/usb0 vfat user,noauto 0 0\n ¿cuál es uno de los comandos posibles que un usuario ordinario (no root) puede usar para montar la partición /dev/sdb1 en el punto de montaje /media/usb0?",
    "options": [],
    "answer": "mount /media/usb0",
    "explicacion": "Cuando en el archivo /etc/fstab una entrada tiene la opción 'user', un usuario normal puede montar el dispositivo simplemente especificando el punto de montaje o el dispositivo, ya que el sistema lee el resto de parámetros de fstab.",
    "pista": "Si la opción 'user' está presente, no necesitas especificar todos los parámetros."
    },
    {
  "question": "16. En un servidor que ejecuta el kernel de Linux 3.4.50-11, ¿qué archivo en el directorio /boot contiene los parámetros de configuración del kernel?",
  "options": [
    "A. config-linux-3.4.50-11",
    "B. config-3.4.50-11",
    "C. system-3.4.50-11",
    "D. vmlinuz-3.4.50-11",
    "E. rc .config-3.4.50-11"
  ],
  "answer": "B",
  "explicacion": "El archivo de configuración que indica qué opciones y módulos fueron compilados en el kernel se guarda normalmente en /boot con el prefijo 'config-' seguido de la versión exacta del kernel.",
  "pista": "Busca el archivo que empieza por 'config' y coincide exactamente con la versión del kernel."
    },
    {
  "question": "17. ¿Cuál es el archivo de plantilla (template) principal utilizado por autofs?",
  "options": [
    "A. default.maps",
    "B. auto.cont",
    "C. auto.master",
    "D. autofs.master"
  ],
  "answer": "C",
  "explicacion": "El archivo /etc/auto.master es el mapa maestro de autofs. Este archivo indica al demonio automount qué puntos de montaje debe controlar y qué archivos de mapa específicos (como el visto en la pregunta 1) debe consultar para cada uno.",
  "pista": "Es el archivo 'maestro' que coordina todos los demás mapas de montaje automático."
    },
    {
  "question": "18. ¿Cuál de los siguientes es un estándar de sistema de archivos para CD-ROM?",
  "options": [
    "A. OSI9660",
    "B. ISO9660",
    "C. SROFS",
    "D. IS08859",
    "E. ROM-EO"
  ],
  "answer": "B",
  "explicacion": "El estándar ISO 9660 es el formato universal utilizado para soportes de solo lectura como el CD-ROM, permitiendo que sean legibles en diferentes sistemas operativos.",
  "pista": "Es una norma ISO muy famosa que empieza por 9..."
    },
    {
  "question": "19. ¿Cuál de los siguientes comandos borrará el contenido de la partición /dev/sdb3?",
  "options": [
    "A. rm /dev/sdb3",
    "B. dd if=/dev/zero of=/dev/sdb3",
    "C. dd of=/dev/zero if=/dev/sdb3",
    "D. umount /dev/sdb3"
  ],
  "answer": "B",
  "explicacion": "El comando 'dd' con 'if=/dev/zero' lee un flujo infinito de ceros y lo escribe en el destino 'of=/dev/sdb3', sobrescribiendo eficazmente todos los datos de esa partición.",
  "pista": "El origen (if) debe ser la fuente de ceros y el destino (of) la partición a borrar."
    },
    {
    "question": "20. En la siguiente salida del comando 'top', ¿qué procesos contribuyen al porcentaje de tiempo que la CPU pasa en el estado 'wa'?",
    "options": [
      "A. Procesos esperando la interacción del usuario.",
      "B. Procesos que ya fueron cerrados y esperan ser lanzados de nuevo.",
      "C. Procesos que no han sido programados aún porque no se han cargado totalmente en RAM.",
      "D. Procesos esperando a que se completen las operaciones de E/S (I/O)."
    ],
    "answer": "D",
    "explicacion": "El valor 'wa' (I/O Wait) indica el porcentaje de tiempo que la CPU estuvo ociosa mientras había procesos esperando a que terminara una operación de lectura o escritura en disco.",
    "pista": "'wa' viene de 'wait' para operaciones de entrada/salida."
    },
    {
  "question": "21. De acuerdo con la siguiente salida de tcpdump, ¿cuál es la dirección IP del host cliente?\n02:12:40.511381 IP 192.168.246.11.1045 > 192.168.246.1.22: S 3838532429:3838532429(0) win5840\n<mss 1460,sackOK,timestamp 31325740,nop,wscale 2>\n02:12:40.511540 IP 192.168.246.1.22 > 192.168.246.11.1045: S 1209330085:1209330085(0)\nack383853\n2430 win 5792 <mss 1460,sackOK,timestamp 11553457 3132574,nop,wscale 0>\n02:12:40.511755 IP 192.168.246.11.1045 > 192.168.246.1.22:. ack 1 win 1460\n<nop,nop,timestamp 3132574 11553457>\n02:12:40.515122 IP 192.168.246.1.22>192.168.246.11.1045: P1:26(25) ack1win 5792\n<nop,nop,timestamp 11553460 3132574>\n02:12:40.515511 IP 192.168.246.11.1045 > 192.168.246.1.22: . ack 26 win 1460\n<nop,nop,timestamp3132578 11553460>\n02:12:40.515952 IP 192.168.246.11.1045 > 192.168.246.1.22: P 1:23(22) ack 26 win1460\n<nop,nop,timestamp 3132578 11553460>",
  "options": [],
  "answer": "192.168.246.11",
  "explicacion": "En una captura de tráfico, el cliente es generalmente el que inicia la conexión (envía el primer paquete con el flag 'S' de SYN). En la salida, vemos que 192.168.246.11 envía un paquete desde un puerto alto (1045) hacia el puerto 22 (SSH) del servidor 192.168.246.1.22.",
  "pista": "Observa quién inicia la conexión enviando el primer paquete al puerto del servicio (22)."
    },
    {
  "question": "22. El siguiente es un extracto de la salida de 'tcpdump -nli eth1'. ¿Qué servicio de red o protocolo se estaba utilizando?",
  "options": [
    "A. FTP",
    "B. HTTP",
    "C. SSH",
    "D. DNS",
    "E. DHCP"
  ],
  "answer": "A",
  "explicacion": "En la salida de tcpdump, la dirección de destino es 192.168.5.112.21. El número final (.21) indica el puerto de destino. El puerto 21 es el puerto estándar asignado al protocolo de transferencia de archivos (FTP).",
  "pista": "Observa el número que aparece después de la última dirección IP de destino."
    },
    {
  "question": "23. ¿Qué componente de un sistema monitoriza smartd?",
  "options": [
    "A. CPU",
    "B. RAM",
    "C. Discos duros (Hard drives)",
    "D. Tráfico Ethernet"
  ],
  "answer": "C",
  "explicacion": "El demonio smartd forma parte de Smartmontools y se encarga de monitorizar el sistema S.M.A.R.T. (Self-Monitoring, Analysis and Reporting Technology) incorporado en la mayoría de los discos duros modernos (ATA, Serial ATA y SCSI/SAS) para predecir fallos y detectar errores.",
  "pista": "S.M.A.R.T. es una tecnología exclusiva para el diagnóstico de salud de unidades de almacenamiento."
    },
    {
  "question": "24. ¿Cómo se puede cambiar el parámetro del kernel para el tamaño máximo del segmento de memoria compartida (shmmax) a 2GB (2147483648 Bytes) en un sistema en ejecución? (Elige dos)",
  "options": [
    "A. Editar /etc/shmmax y establecer el parámetro en 2147483648.",
    "B. sysctl shmmax=2147483648",
    "C. sysctl kernel.shmmax=2147483648",
    "D. echo 2147483648 > /proc/sys/kernel/shmmax",
    "E. export kernel.shmmax=2147483648"
  ],
  "answer": "C, D",
  "explicacion": "Existen dos formas principales de modificar parámetros del kernel en caliente: 1) Usando el comando 'sysctl' con la notación de punto, o 2) Escribiendo directamente en el sistema de archivos virtual /proc, que es la interfaz directa del kernel en el espacio de usuario.",
  "pista": "Puedes usar una herramienta específica (sysctl) o escribir directamente en la 'ventana' del kernel en /proc."
    },
    {
    "question": "25. Por favor, introduzca la ruta completa al archivo de configuración principal del proceso SysV init.",
    "options": [],
    "answer": "/etc/inittab",
    "explicacion": "En los sistemas que utilizan el estilo tradicional System V (SysV), el archivo /etc/inittab define el nivel de ejecución (runlevel) por defecto y qué procesos debe lanzar el sistema al arrancar.",
    "pista": "Se encuentra en /etc y su nombre indica que es una 'tabla de inicio'."
    },
    {
  "question": "26. En la siguiente salida, ¿cuál es el promedio de carga (load average) del sistema para los últimos 5 minutos?\n# uptime\n1 2:10:05 up 18 days, 19:00, 2 users, load average: 0.47, 24.71, 35.31",
  "options": [
    "A. 0.47",
    "B. 24.71",
    "C. 35.31",
    "D. No hay intervalo de 5 minutos. Es algún valor entre 0.47 y 24.71.",
    "E. No hay intervalo de 5 minutos. Es algún valor entre 24.71 y 35.31."
  ],
  "answer": "B",
  "explicacion": "La salida del comando 'uptime' muestra tres valores de promedio de carga que corresponden a los últimos 1, 5 y 15 minutos, respectivamente. En este caso, el segundo valor es 24.71.",
  "pista": "Los valores de load average siempre siguen el orden: 1 min, 5 min, 15 min."
    },
    {
  "question": "27. ¿Cuál de los siguientes es un efecto secundario del uso extensivo del espacio de intercambio (swap)?",
  "options": [
    "A. El sistema de archivos raíz puede llenarse porque el espacio swap siempre se ubica en la partición raíz.",
    "B. El rendimiento general del sistema puede degradarse debido al uso intensivo del disco duro y a la reorganización de la memoria.",
    "C. Dado que los procesos siempre existen completamente en la RAM o en la swap, la RAM normal puede quedar sin uso si el kernel no devuelve los procesos a la memoria.",
    "D. La memoria puede fragmentarse y ralentizar el acceso a las páginas de memoria. Sin embargo, esto se puede minimizar mediante el uso regular de memfrag -d.",
    "E. Las aplicaciones deben reiniciarse porque sus direcciones de memoria virtual cambian para reflejar la reubicación de la memoria al área de direcciones swap."
  ],
  "answer": "B",
  "explicacion": "El espacio swap es significativamente más lento que la memoria RAM física. Cuando el sistema recurre constantemente a la swap (un fenómeno conocido como 'thrashing'), la CPU pasa gran parte de su tiempo esperando a que los datos se muevan entre el disco y la RAM, lo que degrada drásticamente el rendimiento.",
  "pista": "El disco duro es órdenes de magnitud más lento que la RAM física."
    },
    {
  "question": "28. ¿Qué comando se utiliza para descargar un solo módulo actualmente cargado por el kernel sin descargar ningún módulo del que este dependa? (Especifique el comando con o sin ruta)",
  "options": [],
  "answer": "rmmod",
  "explicacion": "El comando 'rmmod' es una herramienta simple para eliminar un módulo específico del kernel de Linux, siempre que no esté en uso. A diferencia de 'modprobe -r', 'rmmod' no intenta descargar automáticamente las dependencias.",
  "pista": "Es el comando 'clásico' para remover módulos (remove module)."
    },
    {
  "question": "29. ¿Cuál es el propósito del comando vgextend?",
  "options": [
    "A. Extender la huella de un grupo de volúmenes en el disco.",
    "B. Añadir volúmenes físicos a un grupo de volúmenes existente.",
    "C. Aumentar el número de días entre comprobaciones de errores programadas.",
    "D. Crear un grupo de volúmenes que utilice todo el espacio disponible en el disco."
  ],
  "answer": "B",
  "explicacion": "El comando 'vgextend' se utiliza en LVM (Logical Volume Management) para expandir un Grupo de Volúmenes (VG) agregando uno o más Volúmenes Físicos (PV) adicionales. Esto aumenta el espacio total disponible que luego puede ser asignado a Volúmenes Lógicos (LV).",
  "pista": "Piensa en LVM como capas: para que el grupo (VG) sea más grande, necesitas añadirle más piezas físicas (PV)."
    },
    {
    "question": "30. ¿Qué entradas en /etc/hosts.allow permitirán el acceso a sshd para usuarios de la subred 192.168.1.0/24? (Elige dos)",
    "options": [
      "A. sshd: 192.168.1.",
      "B. sshd: 192.168.1",
      "C. sshd: 192.168.1.0 netmask 255.255.255.0",
      "D. sshd: 192.168.1.0/255.255.255.0",
      "E. sshd : 192.168.1.0"
    ],
    "answer": "A, D",
    "explicacion": "El archivo hosts.allow acepta varias sintaxis: 1) La IP parcial terminada en punto (192.168.1.) que actúa como comodín para todo el rango, y 2) La dirección de red seguida de la máscara completa (192.168.1.0/255.255.255.0).",
    "pista": "Busca la opción con el punto final y la que usa la máscara en formato largo."
    },
    {
  "question": "31. ¿Cuál es el propósito del demonio smartd?",
  "options": [
    "A. Es un demonio de espacio de usuario utilizado para leer tarjetas inteligentes (smart cards) y chips de circuitos integrados.",
    "B. Intenta reparar automáticamente los sistemas de archivos tras una comprobación fallida del sistema de archivos.",
    "C. Monitoriza la actividad de los procesos y ayuda al kernel a decidir qué procesos matar cuando el kernel sobreasigna memoria (overcommits).",
    "D. Monitoriza ciertas unidades de disco e intenta predecir cuándo fallarán."
  ],
  "answer": "D",
  "explicacion": "El demonio smartd monitoriza el estado S.M.A.R.T. de los discos duros y SSDs. Su función principal es detectar señales de degradación física para avisar al administrador antes de que ocurra una pérdida de datos definitiva.",
  "pista": "S.M.A.R.T. se traduce como Tecnología de Auto-Monitorización, Análisis e Informe para almacenamiento."
    },
    {
  "question": "32. ¿Qué opción de montaje debe utilizarse en /etc/fstab al montar un objetivo iSCSI?",
  "options": [
    "A. _santarget",
    "B. iscsi",
    "C. waitiscsi",
    "D. _netdev"
  ],
  "answer": "D",
  "explicacion": "La opción '_netdev' indica al sistema que el dispositivo reside en la red. Esto es crucial porque impide que el sistema intente montar el disco antes de que las interfaces de red estén activas, evitando que el proceso de arranque se bloquee o falle.",
  "pista": "Es una opción genérica para cualquier dispositivo que dependa de la 'red' (network device)."
    },
    {
  "question": "33. En el ejemplo de salida siguiente, ¿qué columnas detallan el porcentaje de tiempo que la CPU pasó ejecutando código que no es del kernel y el porcentaje de tiempo que la CPU pasó ejecutando código del kernel? (Elige dos) \n# vmstat 1100 procs -----------memory---------- ---swap-- -----io---- --system-- ----cpu---r b swpd free b\nuff cache si so bi bo in cs us sy id wa\n0 0 0 282120 134108 5797012 0 0 0 2 0 0 0 0 100 0\n0 0 0 282120 134108 5797012 0 0 0 0 1007 359 0 0 100 0\n0 0 0 282120 134108 5797012 0 0 0 0 1117 577 0 0 100 0\n0 0 0 282120 134108 5797012 0 0 0 0 1007 366 0 0 100 0\n",
  "options": [
    "A. id",
    "B. us",
    "C. wa",
    "D. sy"
  ],
  "answer": "B, D",
  "explicacion": "En la salida de 'vmstat', las columnas bajo la sección 'cpu' representan diferentes estados: 'us' (user) es el tiempo ejecutando código de usuario (no kernel) y 'sy' (system) es el tiempo ejecutando código del kernel.",
  "pista": "Asocia 'us' con 'user' y 'sy' con 'system' (kernel)."
    },
    {
  "question": "34. ¿Qué formato de archivo se utiliza para crear una imagen initramfs?",
  "options": [
    "A. gzip",
    "B. tar",
    "C. RAR",
    "D. cpio",
    "E. bzip2"
  ],
  "answer": "D",
  "explicacion": "Una imagen initramfs es esencialmente un archivo comprimido que contiene un sistema de archivos temporal. El formato de archivo utilizado para empaquetar estos archivos es 'cpio'. Normalmente, este archivo cpio luego se comprime con gzip, pero el formato de archivo base es cpio.",
  "pista": "Es un formato de archivo antiguo pero muy eficiente para transmitir flujos de datos, similar a tar pero más simple."
    },
    {
  "question": "35. ¿Bajo qué circunstancias el comando ping mostraría la cadena (DUP!)?",
  "options": [
    "A. Cuando los paquetes ICMP se envían a una dirección de broadcast y varios hosts responden.",
    "B. Cuando el host al que se envían los paquetes ICMP está en una red diferente.",
    "C. Cuando el router responde al paquete ICMP además del host que lo recibe.",
    "D. Cuando el host que envía el paquete ICMP es el mismo que lo recibe."
  ],
  "answer": "A",
  "explicacion": "La etiqueta (DUP!) indica una respuesta duplicada. Esto ocurre típicamente cuando haces ping a una dirección de difusión (broadcast); el comando recibe múltiples respuestas para un solo paquete enviado, ya que cada equipo activo en esa subred responde individualmente.",
  "pista": "DUP es abreviatura de 'Duplicate'. Piensa en qué situación un solo grito recibiría muchas respuestas iguales."
    },
    {
  "question": "36. ¿Qué comando individual simulará un fallo de dispositivo dentro de un conjunto RAID 5?",
  "options": [
    "A. mdadm --remove /dev/md0 /dev/sdd1",
    "B. mdadm --zero-superblock /dev/sdf3",
    "C. mdadm --force-fault /dev/md2 /dev/sde2",
    "D. mdadm --fail /dev/md0 /dev/sdc1",
    "E. mdadm /dev/md0 --offline /dev/sdc1"
  ],
  "answer": "D",
  "explicacion": "El comando 'mdadm --fail' (o su versión corta '-f') se utiliza para marcar un dispositivo como defectuoso dentro de un arreglo RAID activo. Esto es útil para probar la redundancia del sistema o para preparar la sustitución de un disco antes de retirarlo físicamente.",
  "pista": "El nombre de la opción indica directamente lo que quieres que le pase al disco: que 'falle'."
    },
    {
  "question": "37. Un usuario regular, joe, acaba de ejecutar: ./configure && make && make install para compilar e instalar un programa. Sin embargo, la instalación falla. ¿Qué se podría hacer para instalar el programa? (Elige dos respuestas correctas)",
  "options": [
    "A. Instalar los binarios manualmente con suinstall.",
    "B. Ejecutar make install con privilegios de root.",
    "C. No ejecutar ./configure para mantener la configuración por defecto.",
    "D. Reejecutar ./configure con una opción --prefix donde el usuario tenga permisos de escritura.",
    "E. Ejecutar make install_local para instalar en /usr/local/."
  ],
  "answer": "B, D",
  "explicacion": "El comando 'make install' intenta copiar archivos a directorios protegidos como /usr/bin. Joe puede solucionar esto usando 'sudo make install' (privilegios de root) o cambiando la ruta de instalación a una carpeta personal (ej. /home/joe/bin) usando '--prefix' durante la fase de configuración.",
  "pista": "El problema es de permisos: o escalas privilegios o instalas en un sitio 'tuyo'."
    },
    {
  "question": "38. De acuerdo con el Estándar de Jerarquía de Archivos (FHS), ¿cuál es la ruta al código fuente del kernel de Linux y que puede ser un enlace simbólico al código fuente real? (Especifique la ruta completa sin información de versión).",
  "options": [],
  "answer": "/usr/src/linux",
  "explicacion": "El estándar FHS establece que el código fuente del sistema debe ubicarse en /usr/src. Específicamente, para el kernel de Linux, se utiliza tradicionalmente /usr/src/linux, que suele ser un enlace simbólico apuntando a la carpeta de la versión específica instalada.",
  "pista": "La ruta estándar para fuentes (sources) en Linux es /usr/src/."
    },
    {
  "question": "39. ¿Qué archivos se actualizan a medida que los dispositivos se montan y desmontan para proporcionar información sobre los dispositivos montados actualmente y las opciones utilizadas? (Elige dos respuestas correctas)",
  "options": [
    "A. /proc/dtab",
    "B. /etc/mtab",
    "C. /etc/fstab",
    "D. /proc/mounts",
    "E. /proc/devices"
  ],
  "answer": "B, D",
  "explicacion": "El sistema mantiene el registro de los montajes activos en tiempo real en dos lugares principales: '/etc/mtab' (históricamente un archivo real, ahora a menudo un enlace simbólico) y '/proc/mounts' (una interfaz directa del kernel que muestra el estado exacto del árbol de montajes).",
  "pista": "Fíjate en los nombres que contienen 'mount' o 'mtab' (mount table)."
    },
    {
  "question": "40. El archivo de configuración principal de autofs tiene esta entrada: /home /etc/auto.home. ¿Cuál es el significado del archivo /etc/auto.home?",
  "options": [
    "A. Contiene los mapas indirectos para el montaje de sistemas de archivos.",
    "B. Contiene información de configuración, como contraseñas y claves, para el servidor de archivos remoto.",
    "C. Contiene información de configuración sobre los ajustes para el punto de montaje /home.",
    "D. Contiene la clave SSL para permitir la autenticación en el servidor de archivos remoto."
  ],
  "answer": "A",
  "explicacion": "En 'autofs', el archivo maestro ('auto.master') apunta a archivos de mapas. En este caso, '/etc/auto.home' es un mapa indirecto que define qué subdirectorios dentro de '/home' se montarán automáticamente y desde qué ubicación (NFS, por ejemplo) cuando se acceda a ellos.",
  "pista": "Autofs utiliza 'mapas' para saber qué montar bajo demanda."
    },
    {
    "question": "41. ¿Qué comandos se utilizan para cargar módulos en el kernel de Linux? (Elija DOS respuestas correctas).",
    "options": [
      "A. insmod",
      "B. loadmod",
      "C. kernload",
      "D. modprobe",
      "E. probemod"
    ],
    "answer": "A, D",
    "explicacion": "insmod inserta un módulo especificando su ruta. modprobe es más avanzado; busca módulos en los directorios estándar y carga automáticamente cualquier dependencia necesaria.",
    "pista": "Herramientas de inserción de módulos."
    },
    {
    "question": "42. ¿Qué directorio en /dev/disk/ se puede utilizar para determinar el UUID de un disco duro conectado?",
    "options": [],
    "answer": "/dev/disk/by-uuid",
    "explicacion": "Este directorio proporciona una forma persistente de identificar particiones a través de su UUID, el cual no cambia incluso si el disco se mueve a un controlador o puerto diferente.",
    "pista": "Identificación persistente por UUID."
    },
    {
    "question": "43. ¿Cómo configurar el router 192.168.0.1 como puerta de enlace predeterminada en el cliente? (Elija DOS)",
    "options": [
      "A. route add default gw 192.168.0.1 eth0",
      "B. ifconfig eth0 defaultroute 192.168.0.1",
      "C. ip route add default via 192.168.0.1 dev eth0",
      "D. echo defaultroute 192.168.0.1 >> /etc/resolv.conf",
      "E. route add defaultgw=192.168.0.1 if=eth0"
    ],
    "answer": "A, C",
    "explicacion": "Se utilizan los comandos estándar de enrutamiento de net-tools e iproute2.",
    "pista": "Comandos de red 'route' e 'ip'."
    },
    {
    "question": "44. Un servidor está en modo monousuario. ¿Qué comandos lo restauran a su nivel de ejecución habitual? (Elija DOS)",
    "options": [
      "A. telinit 0",
      "B. shutdown -r now",
      "C. sync",
      "D. shutdown -h now",
      "E. reboot"
    ],
    "answer": "B, E",
    "explicacion": "Reiniciar el sistema (reboot) devuelve el servidor a su estado de ejecución normal.",
    "pista": "Reiniciar para salir de mantenimiento."
    },
    {
    "question": "45. En esta salida de ejemplo, ¿qué descripciones coinciden con el propósito de las columnas free, buff y cache? (Elija TRES respuestas correctas).\n# vmstat 1100 procs -----------memory---------- ---swap-- -----io---- --system-- ----cpu---r b swpd free buff cache si so bi bo in cs us sy id wa\n0 0 0 282120 134108 5797012 0 0 0 2 0 0 0 0 100 0\n0 0 0 282120 134108 5797012 0 0 0 0 1007 359 0 0 100 0\n0 0 0 282120 134108 5797012 0 0 0 0 1117 577 0 0 100 0\n0 0 0 282120 134108 5797012 0 0 0 0 1007 366 0 0 100 0\n",
    "options": [
      "A. Espacio de swap usado",
      "B. RAM disponible para búferes del sistema de archivos",
      "C. RAM libre disponible",
      "D. RAM usada para búferes",
      "E. RAM usada para caché del sistema de archivos"
    ],
    "answer": "C, D, E",
    "explicacion": "En vmstat, free es la memoria RAM libre, buff es la usada para búferes y cache es la usada para la caché del sistema de archivos.",
    "pista": "Memory columns."
    },
    {
    "question": "46. Durante el arranque, cuando el kernel de Linux carga un archivo initramfs, ¿qué comando del initramfs se ejecutará primero, si está presente?",
    "options": [
      "A. /init",
      "B. /initrd",
      "C. /linuxrc",
      "D. /re.local",
      "E. /sbin/init"
    ],
    "answer": "A",
    "explicacion": "El script o binario '/init' es el primer proceso que el kernel busca ejecutar al cargar un initramfs.",
    "pista": "Primer proceso del initramfs."
    },
    {
    "question": "47. ¿Cuáles son los principales servicios de red utilizados por el protocolo PXE? (Elija DOS respuestas correctas).",
    "options": [
      "A. DNS",
      "B. DHCP",
      "C. HTTP",
      "D. TFTP",
      "E. NFS"
    ],
    "answer": "B, D",
    "explicacion": "PXE utiliza DHCP para obtener una dirección IP e información del servidor, y TFTP para descargar la imagen de arranque.",
    "pista": "Servicios de arranque por red."
    },
    {
    "question": "48. ¿Cuál de los siguientes archivos se utiliza para resolver nombres de host a direcciones IP? (Elija DOS respuestas correctas).",
    "options": [
      "A. /etc/systems",
      "B. /etc/hosts",
      "C. /etc/network",
      "D. /etc/dns.conf",
      "E. /etc/resolv.conf"
    ],
    "answer": "B, E",
    "explicacion": "'/etc/hosts' contiene mapeos locales estáticos y '/etc/resolv.conf' configura los servidores DNS para resolución dinámica.",
    "pista": "Archivos de resolución de nombres."
    },
    {
    "question": "49. ¿Qué componente de un sistema monitorea smartd?",
    "options": [
      "A. CPU",
      "B. RAM",
      "C. Discos duros",
      "D. Tráfico Ethernet"
    ],
    "answer": "C",
    "explicacion": "smartd monitorea el sistema S.M.A.R.T. integrado en los discos duros para predecir fallos.",
    "pista": "Salud del almacenamiento."
    },
    {
    "question": "50. Debido a un uso extremo del sistema, un sistema Linux requiere algo de espacio de swap adicional. Para inicializar 5GB de espacio de swap adicional, ¿qué combinación de comandos debe usarse?",
    "options": [
      "A. dd if=/dev/zero of=/tmp/swapfile bs=1024 count=5120000; mkswap /tmp/swapfile; mount/tmp/swapfile",
      "B. dd if=/dev/zero of=/tmp/swapfile bs=1024 count=5120000; swapon /tmp/swapfile",
      "C. dd if=/dev/zero of=/tmp/swapfile bs=1024 count=5120000; mkswap /tmp/swapfile; swapon/tmp/swapfile",
      "D. touch -SG /tmp/swapfile; swapon /tmp/swapfile",
      "E. mkswap /tmp/swapfile 512000; swapon /tmp/swapfile"
    ],
    "answer": "C",
    "explicacion": "El proceso requiere crear el archivo con 'dd', formatearlo con 'mkswap' y activarlo con 'swapon'.",
    "pista": "Pasos para crear swap en archivo."
    },
    {
    "question": "51. ¿Cuál de los siguientes comandos proporcionará los PID de los procesos ordenados por los que utilizan más ciclos de CPU en el sistema Linux?",
    "options": [
      "A. top",
      "B. uptime",
      "C. ps aux",
      "D. vmstat",
      "E. freemem"
    ],
    "answer": "A",
    "explicacion": "El comando 'top' muestra en tiempo real los procesos del sistema, ordenándolos por defecto según el uso de CPU.",
    "pista": "Monitor de procesos interactivo."
    },
    {
    "question": "52. ¿Qué archivo indica a GRUB las rutas de las particiones del sistema de archivos tanto en formato Linux como en sintaxis GRUB? (Especifique solo el nombre del archivo sin información de ruta).",
    "options": [],
    "answer": "device.map",
    "explicacion": "El archivo 'device.map' mapea los dispositivos del BIOS a los nombres de los dispositivos de Linux.",
    "pista": "Mapeo de dispositivos de GRUB."
    },
    {
    "question": "53. El disco duro IDE /dev/hda no tiene habilitado DMA. ¿Qué comando debe ejecutarse para habilitar DMA en él?",
    "options": [
      "A. hdparm -d /dev/hda",
      "B. hdparm --dma /dev/hda",
      "C. hdparm --dma /dev/hdal",
      "D. hdparm -d /dev/hdal",
      "E. hdparm -d 1 /dev/hda"
    ],
    "answer": "E",
    "explicacion": "El comando 'hdparm -d 1' se utiliza para activar la opción de acceso directo a memoria (DMA).",
    "pista": "Parámetros de hdparm."
    },
    {
    "question": "54. ¿Qué palabra clave falta en la siguiente línea de /etc/fstab para que el usuario fred pueda escribir en un dispositivo flash USB cuando esté montado?: /dev/sdal /mnt/usbflash vfat defaults,users, =fred,umask=022, 0 0 (Proporcione solo el nombre de la opción sin ningún ajuste).",
    "options": [],
    "answer": "uid",
    "explicacion": "La opción 'uid' permite especificar qué usuario será el propietario de los archivos en sistemas que no soportan permisos de Linux.",
    "pista": "User ID option."
    },
    {
    "question": "55. ¿Qué debe hacerse para asegurar que una máquina cliente utilice el servidor de nombres recursivo que se ejecuta en la dirección IP 192.168.0.1? (Elija DOS respuestas correctas).",
    "options": [
      "A. Agregar nameserver 192.168.0.1 a /etc/resolv.conf.",
      "B. Ejecutar route add nameserver 192.168.0.1.",
      "C. Ejecutar ifconfig eth0 nameserver 192.168.0.1.",
      "D. Asegurarse de que el servicio dns aparezca en la entrada hosts del archivo /etc/nsswitch.conf.",
      "E. Ejecutar bind add nameserver 192.168.0.1."
    ],
    "answer": "A, D",
    "explicacion": "Se debe configurar el servidor en '/etc/resolv.conf' y asegurar que el sistema consulte DNS mediante '/etc/nsswitch.conf'.",
    "pista": "Configuración de cliente DNS."
    },
    {
    "question": "56. Si todos los siguientes archivos y/o enlaces simbólicos existen en un directorio de nivel de ejecución SysV-init, ¿cuál de los siguientes se ejecutará primero al arrancar el sistema directamente en dicho nivel de ejecución?",
    "options": [
      "A. S99lpi",
      "B. K99lpi",
      "C. PRE-S99lpi",
      "D. S98lpi",
      "E. S99a-lpi"
    ],
    "answer": "D",
    "explicacion": "Los scripts de inicio se ejecutan en orden numérico ascendente; por lo tanto, el número 98 se ejecuta antes que el 99.",
    "pista": "Prioridad numérica de arranque."
    },
    {
    "question": "57. La secuencia correcta de comandos para crear y montar volúmenes lógicos en un sistema Linux es:",
    "options": [
      "A. lvcreate, pvcreate, vgcreate, mkfs, mount",
      "B. pvcreate, vgcreate, lvcreate, mkfs, mount",
      "C. vgcreate, lvcreate, pvcreate, mount, mkfs",
      "D. mkfs, pvcreate, vgcreate, lvcreate, mount",
      "E. pvcreate, lvcreate, vgcreate, mkfs, mount"
    ],
    "answer": "B",
    "explicacion": "El orden lógico es preparar volúmenes físicos (PV), agruparlos (VG), crear el volumen lógico (LV), formatear y montar.",
    "pista": "Pasos de administración de LVM."
    },
    {
    "question": "58. ¿Cuál es el nombre del dispositivo para la primera unidad de cinta SCSI en un sistema cuando se utiliza sin rebobinado automático después de cada operación de escritura? (Por favor, especifique la ruta completa al dispositivo).",
    "options": [],
    "answer": "/dev/nst0",
    "explicacion": "El prefijo 'n' en 'nst' indica 'no-rewind' (sin rebobinado) para dispositivos de cinta SCSI.",
    "pista": "Ruta de dispositivo de cinta."
    },
    {
    "question": "59. ¿Cuáles de los siguientes son sistemas de respaldo comunes utilizados en Linux? (Elija DOS respuestas correctas).",
    "options": [
      "A. Amanda",
      "B. Bacula",
      "C. DrBackup",
      "D. BREWBackup",
      "E. SARcheck"
    ],
    "answer": "A, B",
    "explicacion": "Amanda y Bacula son dos de las soluciones de respaldo de código abierto más conocidas para entornos Linux.",
    "pista": "Soluciones de backup open source."
    },
    {
    "question": "60. ¿Qué acción debe realizarse después de aumentar el tamaño de un volumen lógico?",
    "options": [
      "A. Ejecutar vgresize.",
      "B. Aumentar el tamaño del sistema de archivos utilizado para el volumen lógico.",
      "C. Ejecutar lvresize.",
      "D. Volver a montar el volumen lógico."
    ],
    "answer": "B",
    "explicacion": "Tras redimensionar el volumen lógico, es necesario ampliar el sistema de archivos subyacente para que reconozca el nuevo espacio.",
    "pista": "Acción post-lvresize."
    }
];