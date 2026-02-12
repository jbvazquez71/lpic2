var preguntas202_400_EN = [
  {
    "question": "1. After setting up Apache to run inside a chroot jail as a non-root user, httpd no longer starts. What is the primary cause of the problem?",
    "options": [
      "A. Apache needs to start as root to bind to port 80",
      "B. Apache cannot read the main index.html file because it was not moved into the chroot environment",
      "C. A LoadModule line for mod_chroot needs to be added to httpd.conf",
      "D. Apache requires a Virtual Host directive when running from a chroot environment",
      "E. The mod_chroot configuration needs the absolute path to the chroot environment"
    ],
    "answer": "A",
    "explicacion": "Ports below 1024 are privileged; Apache must start as root to bind to port 80 before switching to a non-root user.",
    "pista": "Privileged ports."
  },
  {
    "question": "2. Considering the following kernel IP routing table now, which of the following commands must be remove the route to the network 10.10.1.0/24?",
    "options": [
      "A. routedel 10.10.1.0",
      "B. routedel 10.10.1.0/24",
      "C. routedel-net 10.10.1.0/24",
      "D. routedel 10.10.1.0/24 gw 192.168.246.11",
      "E. routedel-net 10.10.1.0"
    ],
    "answer": "C",
    "explicacion": "The syntax 'routedel-net' was used in older tools/exams to refer to removing a network route. Modern usage is 'route del -net', but option C is the expected answer in this legacy context.",
    "pista": "Delete network."
  },
  {
    "question": "3. Which file, on a majordomo server, will contain a list of all members' email addresses for the mailing list \"linux-users\"? (Enter only the file name).",
    "answer": "linux-users",
    "explicacion": "In Majordomo, the subscriber list file has the same name as the mailing list itself.",
    "pista": "List name."
  },
  {
    "question": "4. Users in the acl named 'sales_net' must only be allowed to access to the Internet at times specified in the time_acl named 'sales_time'. Which is the correct http_access directive, to configure this?",
    "options": [
      "A. http_access deny sales_time sales_net",
      "B. http_access allow sales_net sales_time",
      "C. http_access allow sales_net and sales_time",
      "D. allow http_access sales_net sales_time",
      "E. http_access sales_net sales_time"
    ],
    "answer": "B",
    "explicacion": "In Squid, placing multiple ACLs on the same 'http_access allow' line acts as a logical AND condition (both must be true).",
    "pista": "Same line AND condition."
  },
  {
    "question": "5. The internal network (192.168.1.0-192.168.1.255) needs to be able to relay email through the site's sendmail server. What line must be added to /etc/mail/access to allow this?",
    "options": [
      "A. 192.168.1.0/24 RELAY",
      "B. 192.168.1 RELAY",
      "C. 192.168.1.0/24 OK",
      "D. 192.168.1 OK"
    ],
    "answer": "B",
    "explicacion": "Sendmail access database uses the IP prefix (192.168.1) followed by the keyword RELAY to allow relaying.",
    "pista": "IP prefix and RELAY."
  },
  {
    "question": "6. What command is used to print NFS kernel statistics? (Provide the command with or without complete path)",
    "answer": "nfsstat",
    "explicacion": "nfsstat displays statistics kept about NFS client and server activity.",
    "pista": "NFS statistics."
  },
  {
    "question": "7. To configure an LDAP service in the company \"domain Ltd\", which of the following entries should be added to slapd.conf to set the rootdn so that the common name is Manager and the company's domain is domain.com?",
    "options": [
      "A. rootdn cn=Manager de domain dc=com",
      "B. rootdn \"cn=Manager,dc=domain,dc=com\"",
      "C. rootdn en domain, dc= com, dc= Manager",
      "D. rootdn \"en= domain dc= com, dc= Manager\"",
      "E. rootdn \"cn=Manager de domain dc=com\""
    ],
    "answer": "B",
    "explicacion": "Standard DN syntax uses commas as separators and attribute=value format (cn=Manager,dc=domain,dc=com).",
    "pista": "Standard DN format."
  },
  {
    "question": "8. By default OpenLDAP logs via syslogd. What is the slapd.conf file directive to have the LDAP logs written to /var/log/ldap.log?",
    "options": [
      "A. loglevel",
      "B. logfile",
      "C. syslogfile",
      "D. logfilepath"
    ],
    "answer": "B",
    "explicacion": "While 'loglevel' sets verbosity, the 'logfile' directive (available in some versions/configurations) allows specifying a direct file. Standard syslog is usually preferred, but B is the exam answer.",
    "pista": "File for logs."
  },
  {
    "question": "9. A program, called vsftpd, running in a chroot jail, is giving an error about loading shared libraries (libc.so.6). Which TWO of the following are possible solutions?",
    "options": [
      "A. Get the vsftp source code and compile it statically.",
      "B. The file /etc/ld.so.conf must contain the path to the appropriate lib directory in the chroot jail",
      "C. Create a symbolic link that points to the required library outside the chroot jail",
      "D. Copy the required library to the appropriate lib directory in the chroot jail.",
      "E. Run the program using the command chroot and the option --static_libs"
    ],
    "answer": "A, D",
    "explicacion": "Inside a chroot, the program cannot see outside files. You must either compile it statically (so it needs no external libs) or copy the libs inside the jail.",
    "pista": "Static or copy inside."
  },
  {
    "question": "10. Please enter the command with all parameters and arguments, that could be used by root to list the cron jobs for the user john.",
    "answer": "crontab -u john -l",
    "explicacion": "-u specifies the user and -l lists the jobs.",
    "pista": "User John List."
  },
  {
    "question": "11. Which of the following DNS record types is used to allow users and applications to make reverse DNS queries?",
    "options": [
      "A. CNAME",
      "B. IN",
      "C. PTR",
      "D. REV",
      "E. RIN"
    ],
    "answer": "C",
    "explicacion": "PTR (Pointer) records map an IP address to a domain name, used for reverse lookups.",
    "pista": "Pointer record."
  },
  {
    "question": "12. Which entry in the procmailrc file will send a copy of an email to another mail address?",
    "options": [
      "A. :0c",
      "B. :0 copy",
      "C. :c",
      "D. :copy",
      "E. :s"
    ],
    "answer": "A",
    "explicacion": "The 'c' flag (:0c) tells procmail to generate a carbon copy of the email for processing, letting the original continue.",
    "pista": "Carbon copy flag."
  },
  {
    "question": "13. A correctly-formatted entry has been added to /etc/hosts.allow to allow certain clients to connect to a service, but this is having no effect. What would be the cause of this?",
    "options": [
      "A. tcpd needs to be sent the HUP signal.",
      "B. The service needs to be restarted.",
      "C. The machine needs to be restarted.",
      "D. There is a conflicting entry in /etc/hosts.deny.",
      "E. The service does not support tcpwrappers"
    ],
    "answer": "E",
    "explicacion": "/etc/hosts.allow is only read by services compiled with libwrap (tcpwrappers) support or invoked via tcpd.",
    "pista": "Library support."
  },
  {
    "question": "14. An administrator has placed an executable in the directory /etc/init.d, however it is not being executed when the system boots into runlevel 2. What is the most likely cause of this?",
    "options": [
      "A. The script has not been declared in /etc/services",
      "B. runlevel 2 is not declared in /etc/inittab",
      "C. The script has the permissions 700 and is owned by root",
      "D. A corresponding link was not created in /etc/rc2.d"
    ],
    "answer": "D",
    "explicacion": "SysVinit requires a symbolic link (starting with S) in the specific runlevel directory (/etc/rc2.d) pointing to the script.",
    "pista": "Link in rc directory."
  },
  {
    "question": "15. Select the INCORRECT statement regarding the LDIF file format:",
    "options": [
      "A. It contains a dn line.",
      "B. In the file, a blank line separates one entry from another one.",
      "C. If an attribute contains binary data, some specific configurations must be made.",
      "D. The LDIF file accepts any type of file encoding."
    ],
    "answer": "D",
    "explicacion": "LDIF files typically require UTF-8 encoding. They do not accept 'any' random encoding.",
    "pista": "File encoding."
  },
  {
    "question": "16. A server with 2 network interfaces should act as a router but no data is traversing. Which TWO of the following need to be done?",
    "options": [
      "A. Enable IP forwarding with echo 1 > /proc/sys/net/ipv4/ip_forward",
      "B. Add new firewall chains.",
      "C. Reconfigure the firewall rules to allow traffic to traverse the networks.",
      "D. Restart the routing table.",
      "E. Restart the server."
    ],
    "answer": "A, C",
    "explicacion": "Routing requires IP forwarding enabled in the kernel and firewall rules (FORWARD chain) permitting the traffic.",
    "pista": "Kernel forwarding and Firewall rules."
  },
  {
    "question": "17. Which option within the ISC DHCPD configuration file defines the IPv4 DNS server address(es) to be sent to the DHCP clients?",
    "options": [
      "A. domain-name-servers",
      "B. domain-server",
      "C. name-server",
      "D. servers"
    ],
    "answer": "A",
    "explicacion": "The correct option is 'option domain-name-servers' (plural).",
    "pista": "Plural servers."
  },
  {
    "question": "18. What is DNSSEC used for?",
    "options": [
      "A. Encrypted DNS queries between nameservers.",
      "B. Cryptographic authentication of DNS zones.",
      "C. Secondary DNS queries for local zones.",
      "D. Authentication of the user that initiated the DNS query.",
      "E. Encrypting DNS queries and answers."
    ],
    "answer": "B",
    "explicacion": "DNSSEC uses cryptographic signatures to authenticate the origin and integrity of DNS zone data.",
    "pista": "Zone authentication."
  },
  {
    "question": "19. Which Squid configuration directive defines the authentication method to use?",
    "options": [
      "A. auth_param",
      "B. auth_method",
      "C. auth_program",
      "D. auth_mechanism",
      "E. proxy_auth"
    ],
    "answer": "A",
    "explicacion": "'auth_param' configures the parameters for the authentication helpers (basic, digest, etc.).",
    "pista": "Authentication parameter."
  },
  {
    "question": "20. What command is used to reload a set of saved netfilter rules?",
    "options": [
      "A. iptables-restore",
      "B. iptables-recover",
      "C. iptables-load",
      "D. iptables-reload"
    ],
    "answer": "A",
    "explicacion": "'iptables-restore' reads rules from stdin (usually from a file created by iptables-save) and applies them.",
    "pista": "Restore rules."
  },
  {
    "question": "21. With fail2ban what is a 'jail'?",
    "options": [
      "A. A netfilter rules chain blocking offending IP addresses.",
      "B. A group of services to be monitored.",
      "C. A filter definition and a set of one or more actions to take when the filter is matched.",
      "D. The chroot environment in which fail2ban runs."
    ],
    "answer": "C",
    "explicacion": "A jail connects a filter (regex for logs) with an action (e.g., ban IP).",
    "pista": "Filter plus Action."
  },
  {
    "question": "22. Which files are read by the lsdev command? (Please specify THREE answers)",
    "options": [
      "A. /proc/dma",
      "B. /proc/filesystems",
      "C. /proc/interrupts",
      "D. /proc/ioports",
      "E. /proc/swaps"
    ],
    "answer": "A, C, D",
    "explicacion": "lsdev gathers information about installed hardware from dma, interrupts, and ioports in /proc.",
    "pista": "Hardware info files."
  },
  {
    "question": "23. Which TWO of the following wireless tools can be used to check the wireless network link quality?",
    "options": [
      "A. iwconfig",
      "B. iwlink",
      "C. iwscan",
      "D. iwifi",
      "E. iwspy"
    ],
    "answer": "A, E",
    "explicacion": "iwconfig shows link quality statistics. iwspy can also monitor link quality from specific nodes.",
    "pista": "Config and Spy."
  },
  {
    "question": "24. Which ACL type in Squid's configuration file is used for authentication purposes?",
    "options": [
      "A. proxyAuth",
      "B. proxy_auth",
      "C. proxy_passwd",
      "D. auth",
      "E. auth_required"
    ],
    "answer": "B",
    "explicacion": "The 'proxy_auth' ACL type requires the user to authenticate successfully.",
    "pista": "Proxy authentication."
  },
  {
    "question": "25. Options { forwarders { 192.168.0.4; }; forward first; }; What behavior describes this configuration?",
    "options": [
      "A. Any host may use this server.",
      "B. If the server doesn't know the answer, it sends a recursive query to 192.168.0.4.",
      "C. Sends query to root DNS.",
      "D. Hosts can ask for zone transfers.",
      "E. If recursion to 192.168.0.4 fails, it returns failure."
    ],
    "answer": "B",
    "explicacion": "'forward first' means it will query the forwarder (192.168.0.4) first, and if that fails, it will try to resolve it itself.",
    "pista": "Forward first."
  },
  {
    "question": "26. After changing /etc/exports on a server, remote hosts are still unable to mount the exported directories. What should be the next action? (Select TWO)",
    "options": [
      "A. Restart the NFS daemon",
      "B. Run exportfs -a on the server",
      "C. Run exportfs -f on the server",
      "D. Run showmount -a on the server",
      "E. Restart the remote hosts"
    ],
    "answer": "B, C",
    "explicacion": "'exportfs -a' exports all directories; 'exportfs -f' flushes the table. Often 'exportfs -r' (re-export) is used.",
    "pista": "Export all or flush."
  },
  {
    "question": "27. Which of these tools, without any options, provides the most information when performing DNS queries?",
    "options": [
      "A. dig",
      "B. nslookup",
      "C. host",
      "D. named-checkconf",
      "E. named-checkzone"
    ],
    "answer": "A",
    "explicacion": "dig is the most verbose tool by default, showing question, answer, authority, and additional sections.",
    "pista": "Verbose DNS tool."
  },
  {
    "question": "28. To securely use dynamic DNS updates, the use of TSIG is recommended. Which TWO statements about TSIG are true?",
    "options": [
      "A. TSIG is used for zone data encryption",
      "B. TSIG is a signal to start a zone update",
      "C. TSIG is used in zone files",
      "D. TSIG is used only in server configuration",
      "E. Servers using TSIG must be in sync (time zone!)"
    ],
    "answer": "D, E",
    "explicacion": "TSIG uses shared keys in config and requires time synchronization to prevent replay attacks.",
    "pista": "Config only and time sync."
  },
  {
    "question": "29. What command can be used to add a new newsgroup called ABC that allows posting?",
    "options": [
      "A. ctlinnd newgroup ABC n news",
      "B. ctlinnd newgroup ABC y news",
      "C. ctlinnd addgroup ABC y news",
      "D. ctlinnd newgroup ABC +rw news",
      "E. ctlinnd addgroup ABC +rw news"
    ],
    "answer": "B",
    "explicacion": "The syntax is 'ctlinnd newgroup <name> <flag>'. Flag 'y' enables posting.",
    "pista": "Newgroup with flag y."
  },
  {
    "question": "30. Users in 'sales_net' must only be allowed Internet access at 'sales_time'. Which is the correct http_access directive?",
    "options": [
      "A. http_access deny sales_time sales_net",
      "B. http_access allow sales_net sales_time",
      "C. http_access allow sales_net and sales_time",
      "D. allow http_access sales_net sales_time",
      "E. http_access sales_net sales_time"
    ],
    "answer": "B",
    "explicacion": "Listing multiple ACLs on one 'allow' line requires all of them to be true (AND logic).",
    "pista": "Both conditions same line."
  },
  {
    "question": "31. Which command can be used to change the password for an LDAP entry?",
    "answer": "ldappasswd",
    "explicacion": "ldappasswd is the standard utility for updating the userPassword attribute.",
    "pista": "LDAP password tool."
  },
  {
    "question": "32. Which global option in squid.conf sets the port number that Squid will use to listen?",
    "options": [
      "A. port",
      "B. client_port",
      "C. http_port",
      "D. server port",
      "E. squid_port"
    ],
    "answer": "C",
    "explicacion": "http_port is the directive to set the listening port (default 3128).",
    "pista": "HTTP port."
  },
  {
    "question": "33. A security-conscious administrator would change which TWO of the following lines found in an SSH configuration file?",
    "options": [
      "A. Protocol 2, 1",
      "B. PermitEmptyPasswords no",
      "C. Port 22",
      "D. PermitRootlogin yes",
      "E. IgnoreRhosts yes"
    ],
    "answer": "A, D",
    "explicacion": "Disable Protocol 1 (insecure) and disable direct Root login.",
    "pista": "Protocol and Root login."
  },
  {
    "question": "34. Which configuration parameter on a Postfix server modifies only the sender address and not the recipient address?",
    "options": [
      "A. alias_maps",
      "B. alias_rewrite_maps",
      "C. sender_canonical_maps",
      "D. sender_rewrite_maps"
    ],
    "answer": "C",
    "explicacion": "sender_canonical_maps is used specifically for rewriting sender addresses.",
    "pista": "Sender canonical."
  },
  {
    "question": "35. A BIND server should never answer queries from certain networks. Which directive could be used?",
    "options": [
      "A. deny-query",
      "B. no-answer",
      "C. deny-answer",
      "D. deny-access",
      "E. blackhole"
    ],
    "answer": "E",
    "explicacion": "The 'blackhole' directive specifies hosts that the server will ignore completely (no answer).",
    "pista": "Blackhole."
  },
  {
    "question": "36. Which file on a Postfix server modifies the sender address for outgoing e-mails? (File name only)",
    "answer": "sender_canonical",
    "explicacion": "The default file map for sender address rewriting.",
    "pista": "Sender canonical file."
  },
  {
    "question": "37. The syntax of the procmail configuration file is?",
    "options": [
      "A. :0[flags][:[lockfile]] [* condition] action",
      "B. [* condition] action: 0[flags]",
      "C. :O[flags]...",
      "D. :0[flags]...",
      "E. :0[flags]..."
    ],
    "answer": "A",
    "explicacion": "A recipe starts with :0, followed by optional flags/lockfile, conditions (starting with *), and an action line.",
    "pista": "Starts with :0."
  },
  {
    "question": "38. Which answer best describes the meaning of: ldapsearch -x '(&(cn=marie)(telephoneNumber=9*))'",
    "options": [
      "A. Entries that don't have cn marie OR telephone 9...",
      "B. Entries that have cn equal to marie AND telephoneNumber starting with 9",
      "C. Entries that have cn marie AND telephone ending with 9",
      "D. Entries that don't have cn marie...",
      "E. Entries that have cn marie OR telephone..."
    ],
    "answer": "B",
    "explicacion": "& represents the logical AND operation. It matches entries where BOTH conditions are true.",
    "pista": "Ampersand is AND."
  },
  {
    "question": "39. Which option in named.conf specifies which hosts are permitted to ask for domain name information?",
    "options": [
      "A. allowed-hosts",
      "B. accept-query",
      "C. permit-query",
      "D. allow-query"
    ],
    "answer": "D",
    "explicacion": "'allow-query' defines the Access Control List for clients allowed to make queries.",
    "pista": "Allow query."
  },
  {
    "question": "40. Which command can be used to save the current iptables rules into a file? (Command only)",
    "answer": "iptables-save",
    "explicacion": "iptables-save dumps the current rules to stdout.",
    "pista": "Save rules."
  },
  {
    "question": "41. All machines outside the network are able to send emails through the server to addresses not served by that server. This is a(n):",
    "answer": "open email relay",
    "explicacion": "An open relay allows third parties to send email to other third parties, often used for spam.",
    "pista": "Open relay."
  },
  {
    "question": "42. Which Apache directive allows the use of external configuration files defined by AccessFileName?",
    "options": [
      "A. AllowExternalConfig",
      "B. AllowAccessFile",
      "C. AllowConfig",
      "D. IncludeAccessFile",
      "E. AllowOverride"
    ],
    "answer": "E",
    "explicacion": "AllowOverride controls which directives in .htaccess files are processed.",
    "pista": "Allow Override."
  },
  {
    "question": "43. Which of the following are commonly used log file directives in Apache? (Choose TWO)",
    "options": [
      "A. ConfigLog",
      "B. CustomLog",
      "C. ErrorLog",
      "D. ServerLog",
      "E. VHostLog"
    ],
    "answer": "B",
    "explicacion": "ErrorLog specifies the error log file; CustomLog specifies the access log file and format.",
    "pista": "Error and Custom logs."
  },
  {
    "question": "44. A private OID should be obtained for a company when:",
    "options": [
      "A. The company plans to create custom schema files.",
      "B. Using commercial schema.",
      "C. Making directory public.",
      "D. Using encrypted attributes."
    ],
    "answer": "A",
    "explicacion": "To create custom attributes or object classes (schema) without conflicts, a registered Private Enterprise Number (OID) is needed.",
    "pista": "Custom schema."
  },
  {
    "question": "45. Which is the preferred mail server? @ IN MX 10 mx-ny.domain.com; @ IN MX 50 mx-ca.domain.com",
    "answer": "mx-ny.domain.com",
    "explicacion": "Lower preference number means higher priority. 10 is preferred over 50.",
    "pista": "Lowest number wins."
  },
  {
    "question": "46. In what mode is your FTP session when the client makes connections to both data and command ports?",
    "options": [
      "A. passive",
      "B. active",
      "C. impassive",
      "D. safe",
      "E. inactive"
    ],
    "answer": "A",
    "explicacion": "In passive mode (PASV), the client initiates the data connection to the server, which is firewall-friendly.",
    "pista": "Client connects."
  },
  {
    "question": "47. .htaccess: 'Require valid-user... Allow from 10.1.2.0/24... Satisfy any'. Which TWO are true?",
    "options": [
      "A. Apache only grants access to authenticated users from 10.1.2.0/24.",
      "B. Needs AllowOverride AuthConfig Limit.",
      "C. Requires authentication for every client.",
      "D. Users from 10.1.2.0/24 won't need to authenticate.",
      "E. Satisfy can be removed."
    ],
    "answer": "B",
    "explicacion": "'Satisfy any' means meeting either condition (IP match OR valid user) allows access.",
    "pista": "Satisfy any."
  },
  {
    "question": "48. According to SOA 'mars.domain.com hostmaster.domain.com', what is the email address?",
    "answer": "hostmaster@domain.com",
    "explicacion": "The first dot in the RNAME field (hostmaster.domain.com) is replaced by an @ symbol.",
    "pista": "Replace first dot."
  },
  {
    "question": "49. Which Apache directive configures the main directory out of which it serves documents?",
    "options": [
      "A. ServerRoot",
      "B. UserDir",
      "C. DirectoryIndex",
      "D. Location",
      "E. DocumentRoot"
    ],
    "answer": "E",
    "explicacion": "DocumentRoot sets the directory from which httpd will serve files.",
    "pista": "Root of documents."
  },
  {
    "question": "50. Enter the command (no path/options) that shows the time taken to resolve a DNS query.",
    "answer": "dig",
    "explicacion": "The 'dig' command displays a 'Query time' statistic in its output.",
    "pista": "Diagnostic tool."
  },
  {
    "question": "51. LDIF: 'dn: cn=Robert Smith, ou=people,dc=example...'. Which organizational unit is Robert Smith part of?",
    "answer": "people",
    "explicacion": "The 'ou' attribute in the DN specifies the organizational unit.",
    "pista": "Value of ou."
  },
  {
    "question": "52. Host 'domain' (MAC 08:00:...) should always get IP 192.168.1.2. Which config?",
    "options": [
      "A. host domain { hardware-ethernet ...; fixed-address ...; }",
      "B. host domain { mac=...; ip=...; }",
      "C. host domain = ...",
      "D. host domain { hardware ethernet ...; fixed-address ...; }",
      "E. host domain { hardware-address ...; }"
    ],
    "answer": "D",
    "explicacion": "Correct syntax uses 'hardware ethernet' (space) and 'fixed-address'.",
    "pista": "Hardware ethernet syntax."
  },
  {
    "question": "53. Which email storage format uses directories tmp, cur, and new?",
    "options": [
      "A. imap",
      "B. maildir",
      "C. mbox",
      "D. mh",
      "E. pop3"
    ],
    "answer": "B",
    "explicacion": "Maildir format stores messages in individual files within tmp, new, and cur subdirectories.",
    "pista": "Directory structure."
  },
  {
    "question": "54. File server in domain 'foo'. Which TWO configs allow group 'all' to read/write/execute in /srv/smb/data?",
    "options": [
      "A. ... create mask=0550 directory mask=0770",
      "B. ... create mask=0770 directory mask=0770",
      "C. ... create mask=0770 directory mask=0770 (duplicate option text, logic applies)",
      "D. ... directory mask=0770",
      "E. ... create mask=0550"
    ],
    "answer": "B",
    "explicacion": "To allow write/execute, the mask must be at least 0770 (rwx for group). 0550 would deny write.",
    "pista": "Mask 770."
  },
  {
    "question": "55. As of Linux kernel 2.4, which software is used to configure a VPN?",
    "options": [
      "A. IPSec",
      "B. SSH",
      "C. net-tools",
      "D. FreeS/WAN",
      "E. iproute2"
    ],
    "answer": "D",
    "explicacion": "FreeS/WAN was the reference IPsec implementation for Linux 2.4.",
    "pista": "Legacy VPN software."
  },
  {
    "question": "56. Which command lists all exported file systems from a remote NFS server?",
    "options": [
      "A. exportfs",
      "B. mount",
      "C. nfslist",
      "D. rpcstat",
      "E. showmount"
    ],
    "answer": "E",
    "explicacion": "'showmount -e <host>' lists the exports of the remote host.",
    "pista": "Show mounts."
  },
  {
    "question": "57. User requests hidden Samba share 'confidential'. How?",
    "options": [
      "A. [confidential]",
      "B. [$confidential]",
      "C. [#confidential]",
      "D. [%confidential]",
      "E. [confidential$]"
    ],
    "answer": "E",
    "explicacion": "Appending a '$' to the share name makes it hidden in Windows network browsing.",
    "pista": "Dollar sign suffix."
  },
  {
    "question": "58. Mail server 10.10.10.1 should ONLY allow local sending. How to test open relay from outside?",
    "options": [
      "A. MAIL FROM local...",
      "B. RCPT FROM...",
      "C. HELLO...",
      "D. HELO bogus... MAIL FROM external... RCPT TO external...",
      "E. HELO:..."
    ],
    "answer": "D",
    "explicacion": "To test for open relay, connect and try to send mail FROM an external address TO an external address.",
    "pista": "External to external."
  },
  {
    "question": "59. Messages not appearing in native language. What variable?",
    "options": [
      "A. LANG",
      "B. I18N",
      "C. MESSAGES",
      "D. MSGS",
      "E. LC_MSGS"
    ],
    "answer": "A",
    "explicacion": "LANG sets the default locale for all categories.",
    "pista": "Language variable."
  },
  {
    "question": "60. What is needed to synchronize UNIX password with Samba password when smbpasswd changes?",
    "options": [
      "A. Nothing.",
      "B. Run netvamp.",
      "C. winbind --sync.",
      "D. Add 'unix password sync = yes' to smb.conf.",
      "E. Add 'smb unix password = sync'."
    ],
    "answer": "D",
    "explicacion": "The 'unix password sync = yes' parameter tells Samba to update the Unix password when the Samba password changes.",
    "pista": "Sync enabled."
  },
  
  
  {
    "question": "61. The following data is some of the output produced by a program. Which program produced this output? 'strftime (...) = 4 fwrite (...) = 1 fputc (...) = 32...'",
    "options": [
      "A. lsof",
      "B. ltrace",
      "C. nm",
      "D. strace",
      "E. time"
    ],
    "answer": "B",
    "explicacion": "The output shows calls to library functions (like strftime, fwrite), which is characteristic of 'ltrace' (library trace). 'strace' would show system calls.",
    "pista": "Library trace."
  },
  {
    "question": "62. If the command arp -f is run, which file will be read by default?",
    "options": [
      "A. /etc/hosts",
      "B. /etc/ethers",
      "C. /etc/arp.conf",
      "D. /etc/networks",
      "E. /var/cache/arp"
    ],
    "answer": "B",
    "explicacion": "The 'arp -f' command loads entries into the ARP table from the file /etc/ethers by default.",
    "pista": "Ethernet mapping file."
  },
  {
    "question": "63. While analyzing a slapd.conf file, an administrator noted that the rootdn and rootpw directives are not present. Where is the LDAP administrator account defined?",
    "options": [
      "A. It is using the default account admin with the password admin.",
      "B. The account is defined by an ACL in slapd.conf.",
      "C. It is using the default account admin without a password.",
      "D. The account is defined in the file /etc/ldap.secret.",
      "E. The account is defined in the file /etc/ldap.root.conf."
    ],
    "answer": "B",
    "explicacion": "If there is no explicit rootdn, administrative privileges are usually granted to specific users via Access Control Lists (ACLs) or 'access to' directives.",
    "pista": "Access control."
  },
  {
    "question": "64. Which of the following actions should be considered when a FTP chroot jail is created? (Choose THREE correct answers.)",
    "options": [
      "A. Create /dev/ and /etc/ in the chroot enviroment.",
      "B. Create /etc/passwd in the chroot enviroment.",
      "C. Bind-mount /proc in the chroot environment.",
      "D. Create the user ftp in the chroot enviroment.",
      "E. Create /dev/kmem in the chroot environment."
    ],
    "answer": "A, B, D",
    "explicacion": "A chroot environment needs a basic directory structure (/dev, /etc), a copy of authentication files (/etc/passwd), and the user itself.",
    "pista": "Basic filesystem structure."
  },
  {
    "question": "65. A user is on holiday for two weeks. Anyone sending an email to that account should receive an autoresponse. Which of the following procmail rules should be used, so that all incoming emails are processed by vacation?",
    "options": [
      "A. :0c: /usr/bin/vacation nobody",
      "B. :w /usr/bin/vacation nobody",
      "C. :0fc: /usr/bin/vacation nobody",
      "D. /usr/bin/vacation nobody",
      "E. :> | /usr/bin/vacation nobody"
    ],
    "answer": "A",
    "explicacion": "The 'c' flag (:0c:) indicates that a copy of the email should be processed (so the original continues its path) and passed to the vacation program.",
    "pista": "Copy for vacation."
  },
  {
    "question": "66. When trying to reverse proxy a web server through Nginx, what keyword is required to pass the Host header from the original request to the proxied server?",
    "options": [
      "A. proxy_pass_header",
      "B. proxy_forward_header",
      "C. proxy_set_header",
      "D. proxy_header"
    ],
    "answer": "C",
    "explicacion": "The 'proxy_set_header Host $host;' directive is used to redefine or add fields to the request header passed to the backend.",
    "pista": "Set header."
  },
  {
    "question": "67. Which setting in the Courier IMAP configuration file will tell the IMAP daemon to listen only on the localhost interface?",
    "options": [
      "A. ADDRESS=127.0.0.1",
      "B. Listen 127.0.0.1",
      "C. INTERFACE=127.0.0.1",
      "D. LOCALHOST_ONLY = 1"
    ],
    "answer": "A",
    "explicacion": "In Courier, the ADDRESS variable defines the IP address the service should listen on.",
    "pista": "IP Address."
  },
  {
    "question": "68. Which of these ways can be used to only allow access to a DNS server from specified networks/hosts?",
    "options": [
      "A. Using the limit {...; }; statement in the named configuration file.",
      "B. Using the allow-query { ...; }; statement in the named configuration file.",
      "C. Using the answer-only { ...; } statement in the named configuration file.",
      "D. Using the answer {...;}; statement in the named configuration file.",
      "E. Using the query-access {...;}; statement in the named configuration file."
    ],
    "answer": "B",
    "explicacion": "allow-query is the standard BIND directive to restrict who can query the server.",
    "pista": "Allow query."
  },
  {
    "question": "69. Which daemon is required on the client if an ethernet device gets its IP address from a central server?",
    "options": [
      "A. dhcp",
      "B. dhcpcd",
      "C. bootpd",
      "D. ethd",
      "E. dhcpd"
    ],
    "answer": "B",
    "explicacion": "'dhcpcd' (DHCP Client Daemon) or 'dhclient' are the client-side daemons. 'dhcpd' is the server.",
    "pista": "DHCP client daemon."
  },
  {
    "question": "70. Which command would release the current IP address leased by a DHCP server?",
    "options": [
      "A. ipconfig /release",
      "B. ifconfig --release-all",
      "C. dhclient -r",
      "D. ifconfig --release",
      "E. pump --release"
    ],
    "answer": "C",
    "explicacion": "The 'dhclient -r' command explicitly releases the current IP lease and stops the running DHCP client.",
    "pista": "Option -r."
  },
  {
    "question": "71. Which of the following options can be passed to a DHCP client machine using configuration options on the DHCP server?",
    "options": [
      "A. The NIS domain name",
      "B. The resolving order in /etc/resolv.conf",
      "C. The priority order in nsswitch.conf",
      "D. The filter rules for iptables",
      "E. The contents of hosts.allow and hosts.deny"
    ],
    "answer": "A",
    "explicacion": "DHCP can send parameters like IP, mask, gateway, DNS servers, and also the NIS domain (option 'option nis-domain').",
    "pista": "Network Information Service."
  },
  {
    "question": "72. Which of the following is correct about this excerpt from an LDIF file? dn: cn=PrintOperators,ou=Groups,ou=IT,o=BR",
    "options": [
      "A. dn is the domain name.",
      "B. o is the organizational unit.",
      "C. cn is the common name.",
      "D. dn is the relative distinguished name."
    ],
    "answer": "C",
    "explicacion": "In LDAP nomenclature, 'cn' always corresponds to 'Common Name'.",
    "pista": "Meaning of CN."
  },
  {
    "question": "73. Which of these sets of entries will the following command return? ldapsearch -x '(|(cn=marie)(!(telephoneNumber=9*)))'",
    "options": [
      "A. Entries that don't have a cn of marie or don't have a telephoneNumber that begins with 9.",
      "B. Entries that have a cn of marie or don't have a telephoneNumber beginning with 9.",
      "C. Entries that have a cn of marie and a telephoneNumber ending with 9.",
      "D. Entries that don't have a cn of marie and don't have a telephoneNumber beginning with 9.",
      "E. Entries that have a cn of marie or have a telephoneNumber beginning with 9."
    ],
    "answer": "B",
    "explicacion": "The filter combines an OR (|) with a NOT (!). Matches: (cn is marie) OR (phone does NOT start with 9).",
    "pista": "Logic: OR + NOT."
  },
  {
    "question": "74. Which Samba-related command will show all options that were not modified using smb.conf and thus are set to their default values?",
    "answer": "testparm -v",
    "explicacion": "The testparm command checks the configuration. Option '-v' (verbose) also shows default values not explicitly listed in the file.",
    "pista": "Test parameters verbose."
  },
  {
    "question": "75. On a Linux router, packet forwarding for IPv4 has been enabled... Which one of the following options is the best way to ensure this setting ('echo 1 > /proc/sys/net/ipv4/ip_forward') is saved across system restarts?",
    "options": [
      "A. Add echo 1 > /proc/sys/net/ipv4/ip_forward to the root user login script.",
      "B. Add echo 1 > /proc/sys/net/ipv4/ip_forward to any user login script.",
      "C. In /etc/sysctl.conf change net.ipv4.ip_forward to 1.",
      "D. In /etc/rc.local add net.ipv4.ip_forward = 1.",
      "E. In /etc/sysconfig/iptables-config add ipv4.ip_foward = 1."
    ],
    "answer": "C",
    "explicacion": "The file /etc/sysctl.conf is the standard place to configure kernel parameters persistently.",
    "pista": "Sysctl configuration."
  },
  {
    "question": "76. Which of the following sentences is true, when using the following /etc/pam.d/login file? '... password sufficient pam_unix.so nullok ...'",
    "options": [
      "A. All users will be authenticated against the LDAP directory",
      "B. This is the only file needed to configure LDAP authentication on Linux",
      "C. Only local users will be able to log in, when the file/etc/nologin exists",
      "D. Ordinary users will be able to change their password to be blank",
      "E. If the control flags for auth were changed to required, local users wouldn't be able to log in"
    ],
    "answer": "D",
    "explicacion": "The 'nullok' parameter in the pam_unix module allows users to set empty (blank) passwords.",
    "pista": "Null passwords."
  },
  {
    "question": "77. A web server is expected to handle approximately 200 simultaneous requests... and is performing slowly. Which directives in httpd.conf need to be adjusted?",
    "options": [
      "A. MinSpareServers & MaxSpareServers.",
      "B. MinSpareServers, MaxSpareServers, StartServers & MaxClients.",
      "C. MinServers, MaxServers & MaxClients.",
      "D. MinSpareServers, MaxSpareServers, StartServers, MaxClients & KeepAlive."
    ],
    "answer": "B",
    "explicacion": "These directives control child process creation and the limit on concurrent connections (MaxClients) in Apache.",
    "pista": "Process control and max clients."
  },
  {
    "question": "78. What word is missing from the following excerpt of a named.conf file? '_______ friends { 10.10.0.0/24; }; options { allow-query {friends; }; };'",
    "options": [
      "A. networks",
      "B. net",
      "C. list",
      "D. acl"
    ],
    "answer": "D",
    "explicacion": "The keyword 'acl' is used to define access control lists with an alias (in this case, 'friends').",
    "pista": "Access Control List."
  },
  {
    "question": "79. Given this excerpt from an Apache configuration file, which of the numbered lines has INCORRECT syntax? (See original source code)",
    "options": [
      "A. 1",
      "B. 1 and 4",
      "C. 1, 4 and 7",
      "D. 1 and 5",
      "E. None. The configuration is valid"
    ],
    "answer": "E",
    "explicacion": "The <VirtualHost> block and the shown directives (ServerAdmin, DocumentRoot, etc.) follow correct standard syntax.",
    "pista": "Everything looks correct."
  },
  {
    "question": "80. Considering the following kernel IP routing table below, which of the following commands must be used to remove the route to the network 10.10.1.0/24?",
    "options": [
      "A. route del 10.10.1.0",
      "B. route del 10.10.1.0/24",
      "C. route del -net 10.10.1.0/24",
      "D. route del 10.10.1.0/24 gw 192.168.246.11",
      "E. route del -net 10.10.1.0"
    ],
    "answer": "C",
    "explicacion": "To delete a network route with the classic route command, use 'route del -net <network>/<mask>'.",
    "pista": "Delete network."
  },
  {
    "question": "81. Which command can be used to list all exported file systems from a remote NFS server?",
    "options": [
      "A. exportfs",
      "B. nfsstat",
      "C. rpcinfo",
      "D. showmount",
      "E. importfs"
    ],
    "answer": "D",
    "explicacion": "The command 'showmount -e <host>' lists available exports on a remote NFS server.",
    "pista": "Show mounts."
  },
  {
    "question": "82. When the Apache HTTP Server is configured to use name-based virtual hosts:",
    "options": [
      "A. It's necessary to configure a different IP address for each virtual host.",
      "B. The Listen directive is required for each virtual host.",
      "C. Each virtual host can serve requests to exactly one hostname only.",
      "D. It is required to create a Virtual Host block for the main host.",
      "E. The setting NameVirtualHost *:80 indicates that all name based virtual hosts will listen on port 80."
    ],
    "answer": "E",
    "explicacion": "Historically, the NameVirtualHost directive was required to enable name-based vhosts on the specified port.",
    "pista": "Name Virtual Host."
  },
  {
    "question": "83. Which of the following describes the main purpose of strace?",
    "options": [
      "A. Show the TCP/IP stack data, to help to solve network problems",
      "B. Help to follow the traces of intruders of the internal network",
      "C. Debug programs by displaying the original code of the program.",
      "D. Reverse engineer applications, resulting in the source code of the program",
      "E. Debug programs by monitoring system calls and reporting them"
    ],
    "answer": "E",
    "explicacion": "strace intercepts and records the system calls made by a process and the signals it receives.",
    "pista": "System Trace."
  },
  {
    "question": "84. What directive can be used in named.conf to restrict zone transfers to the 192.168.1.0/24 network?",
    "options": [
      "A. allow-transfer { 192.168.1.0/24; };",
      "B. allow-transfer { 192.168.1.0/24 };",
      "C. allow-axfr { 192.168.1.0/24; };",
      "D. allow-axfr { 192.168.1.0/24 };",
      "E. allow-xfer { 192.168.1.0/24; };"
    ],
    "answer": "A",
    "explicacion": "The correct BIND directive is 'allow-transfer', and the syntax requires semicolons inside and outside the braces.",
    "pista": "Allow transfer."
  },
  {
    "question": "85. Which of the following tools, on its own, can provide dial-in access to a server?",
    "options": [
      "A. mingetty",
      "B. pppd",
      "C. dip",
      "D. chat",
      "E. mgetty"
    ],
    "answer": "E",
    "explicacion": "mgetty is an alternative to getty designed specifically to handle modems and serial lines, allowing data and fax calls.",
    "pista": "Getty for modems."
  },
  {
    "question": "86. In which directory can all parameters available to sysctl be found? (Provide the full path)",
    "answer": "/proc/sys",
    "explicacion": "The virtual filesystem /proc/sys exposes kernel parameters that sysctl can read and modify.",
    "pista": "System directory in proc."
  },
  {
    "question": "87. When bash is invoked as an interactive login shell, which of the following sentences is true?",
    "options": [
      "A. It first reads and executes commands in /etc/profile and then does same for ~/.bash_profile and ~/.bashrc",
      "B. It first reads and executes commands in /etc/bashrc and then does same for /etc/profile",
      "C. It reads and executes commands in ~/.bashrc only if /etc/profile or another initialization script calls it.",
      "D. It ignores /etc/profile and only reads and executes commands in ~/.bashrc",
      "E. It first reads and executes commands in /etc/profile and then does same for ~/.bash_profile, ~/.bash_login or ~/.profile"
    ],
    "answer": "C",
    "explicacion": "A login shell defaults to reading /etc/profile and then ~/.bash_profile (or login/profile). It does NOT read ~/.bashrc automatically unless one of the former explicitly sources it.",
    "pista": "Login shell looks for profiles, not rc directly."
  },
  {
    "question": "88. For an LDAP client configuration, the LDAP base needs to be set. Which TWO of the following actions would achieve that?",
    "options": [
      "A. export LDAPBASE=dc=linuxfoo,dc=com",
      "B. export BASE=dc=linuxfoo,dc=com",
      "C. Edit ldapbase.conf and add 'BASE dc=linuxfoo,dc=com'",
      "D. Edit cldap.conf and add 'BASE dc=linuxfoo,dc=com'",
      "E. Edit ldap.conf and add 'BASE dc=linuxfoo,dc=com'"
    ],
    "answer": "A, E",
    "explicacion": "It can be set via the LDAPBASE environment variable or the BASE directive in the global client config file /etc/ldap/ldap.conf.",
    "pista": "Env var and ldap.conf file."
  },
  {
    "question": "89. What postfix configuration setting defines the domains for which Postfix will deliver mail locally? (Provide only the setting name)",
    "answer": "mydestination",
    "explicacion": "mydestination specifies the list of domains that are delivered via the local delivery agent.",
    "pista": "My destination."
  },
  {
    "question": "90. In which directory are the PAM modules stored?",
    "answer": "/lib/security",
    "explicacion": "The standard path for PAM modules is /lib/security (or /lib64/security on 64-bit systems). Note: Some dumps might have an error here, but this is the technical correct answer.",
    "pista": "Security libraries."
  },
  {
    "question": "91. A procmail recipe is required to delete all emails marked as spam. Complete the recipe: ':0: * X-Spam-Status: Yes ...'",
    "answer": "/dev/null",
    "explicacion": "To discard an email silently in Unix/Linux systems, you redirect it to the null device /dev/null.",
    "pista": "System black hole."
  },
  {
    "question": "92. Which setting in the Courier IMAP configuration file will tell the IMAP daemon to only listen on the local host interface?",
    "options": [
      "A. ADDRESS=127.0.0.1",
      "B. Listen 127.0.0.1",
      "C. INTERFACE=127.0.0.1",
      "D. LOCALHOST_ONLY = 1"
    ],
    "answer": "A",
    "explicacion": "In Courier config files (imapd, pop3d), the ADDRESS directive specifies the listening IP.",
    "pista": "Address."
  },
  {
    "question": "93. Which of the following configuration lines will export /usr/local/share/ to nfsclient with read-write access, ensuring that all changes are written straight to the disk?",
    "options": [
      "A. nfsclient:/usr/local/share/:rw,sync",
      "B. nfsclient(rw,sync) /usr/local/share",
      "C. /usr/local/share nfsclient(rw,sync)",
      "D. /usr/local/share nfsclient:rw:sync",
      "E. /usr/local/share nfsclient(rw)"
    ],
    "answer": "C",
    "explicacion": "The syntax of /etc/exports is: directory client(options). The 'sync' option forces synchronous writes to disk.",
    "pista": "Directory, Client, Options."
  },
  {
    "question": "94. What is the path to the global postfix configuration file? (Specify the complete directory path)",
    "answer": "/etc/postfix/main.cf",
    "explicacion": "main.cf is the primary file where most Postfix parameters are defined.",
    "pista": "Main file in /etc/postfix."
  },
  {
    "question": "95. In a BIND zone file, what does the @ character indicate?",
    "options": [
      "A. It's the fully qualified host name of the DNS server.",
      "B. It's an alias for the e-mail address of the zone master.",
      "C. It's the name of the zone as defined in the zone statement in named.conf.",
      "D. It's used to create an alias between two CNAME entries."
    ],
    "answer": "C",
    "explicacion": "The @ symbol expands to the current origin ($ORIGIN), which defaults to the zone name defined in the config.",
    "pista": "The zone origin."
  },
  {
    "question": "96. Which TWO /etc/hosts.allow entries will allow access to sshd from the class C network 192.168.1.0?",
    "options": [
      "A. sshd: 192.168.1.",
      "B. sshd: 192.168.1",
      "C. sshd: 192.168.1.0 netmask 255.255.255.0",
      "D. sshd: 192.168.1.0/255.255.255.0",
      "E. sshd: 192.168.1.0"
    ],
    "answer": "A, D",
    "explicacion": "TCP Wrappers accept '192.168.1.' (trailing dot) as a wildcard for the network, or the full CIDR/netmask notation.",
    "pista": "Trailing dot or full mask."
  },
  {
    "question": "97. Which of the following daemons will monitor log files for inappropriate activity... and will add netfilter rules to block the offending address?",
    "options": [
      "A. fail2ban",
      "B. portsentry",
      "C. openids",
      "D. logwatch"
    ],
    "answer": "A",
    "explicacion": "Fail2ban scans logs (like /var/log/auth.log) and bans IPs showing malicious patterns by updating firewall rules.",
    "pista": "Fail to ban."
  },
  {
    "question": "98. Which THREE of the following actions should be considered when a FTP chroot jail is created?",
    "options": [
      "A. Create /dev/ and /etc/ in the chroot enviroment",
      "B. Create /etc/passwd in the chroot enviroment",
      "C. Create /var/cache/ftp in the chroot enviroment",
      "D. Create the user ftp in the chroot enviroment",
      "E. Create /usr/sbin/ in the chroot enviroment"
    ],
    "answer": "A, B, D",
    "explicacion": "Basic devices, the user database (passwd), and the user itself are required within the jail structure.",
    "pista": "Devices, users, and passwd."
  },
  {
    "question": "99. Which dhcpd.conf option defines the DNS server address(es) to be sent to the DHCP clients?",
    "options": [
      "A. domain name",
      "B. domain-name-servers",
      "C. domain-nameserver",
      "D. domain-name-server"
    ],
    "answer": "B",
    "explicacion": "The correct option is 'option domain-name-servers' (plural), followed by IPs separated by commas.",
    "pista": "Plural name servers."
  },
  {
    "question": "100. Please enter the complete command to create a new password file for HTTP basic authentication... for user john.",
    "answer": "htpasswd -c /home/http/data/web_passwd john",
    "explicacion": "The '-c' (create) option is used to create a new file. If the file exists, it overwrites it.",
    "pista": "htpasswd command with create flag."
  },
  {
    "question": "101. Which BIND option should be used to limit from which IP addresses slave name servers may connect?",
    "options": [
      "A. allow-zone-transfer",
      "B. allow-transfer",
      "C. allow-secondary",
      "D. allow-slaves",
      "E. allow-queries"
    ],
    "answer": "B",
    "explicacion": "The 'allow-transfer' directive specifies which hosts are allowed to request a zone transfer (AXFR/IXFR) from the master server.",
    "pista": "Allow transfer."
  },
  {
    "question": "102. What must be done on a host to allow a user to log in to that host using an SSH key?",
    "options": [
      "A. Add their private key to ~/.ssh/authorized_keys",
      "B. Reference their public key in ~/.ssh/config",
      "C. Run ssh-agent on that host",
      "D. Add their public key to ~/.ssh/authorized_keys",
      "E. Reference their private key in ~/.ssh/config"
    ],
    "answer": "D",
    "explicacion": "For public key authentication, the user's public key must be placed in the '~/.ssh/authorized_keys' file of the target account on the server.",
    "pista": "Authorized keys."
  },
  {
    "question": "103. According to the dhcpd.conf file below, which domain name will clients in the 172.16.87.0/24 network get? (Global: domain.com; Subnet 87.0: lab.domain.com)",
    "answer": "lab.domain.com",
    "explicacion": "Options defined within a subnet declaration ('option domain-name') override global options for clients in that subnet.",
    "pista": "Subnet overrides global."
  },
  {
    "question": "104. A malicious user has sent a 35MB video clip... Looking in the outbound queue... This mail can be removed with the command rm ...",
    "answer": "/var/spool/mqueue/*",
    "explicacion": "To delete mails directly from the Sendmail queue (manual file deletion, risky but effective), delete files in '/var/spool/mqueue/'.",
    "pista": "Mail queue path."
  },
  {
    "question": "105. With Nginx, which of the following directives is used to proxy requests to a FastCGI application?",
    "options": [
      "A. fastcgi_pass",
      "B. fastcgi_proxy",
      "C. proxy_fastcgi",
      "D. proxy_fastcgi_pass"
    ],
    "answer": "A",
    "explicacion": "'fastcgi_pass' is the directive specifying the address (IP:port or unix socket) of the backend FastCGI server.",
    "pista": "Pass to FastCGI."
  },
  {
    "question": "106. What option for BIND is required in the global options to disable recursive queries on the DNS server by default?",
    "options": [
      "A. allow-recursive-query { none; };",
      "B. allow-recursive-query off;",
      "C. recursion { none; };",
      "D. recursion no;"
    ],
    "answer": "D",
    "explicacion": "The correct syntax in named.conf to disable recursion is 'recursion no;'.",
    "pista": "Recursion no."
  },
  {
    "question": "107. What is the missing keyword in the following configuration sample for dovecot? 'auth default { _______ = plain login cram-md5 }'",
    "options": [
      "A. auth_order",
      "B. mechanisms",
      "C. methods",
      "D. supported"
    ],
    "answer": "B",
    "explicacion": "The 'mechanisms' directive defines which SASL authentication mechanisms (like plain, login, cram-md5) Dovecot will accept.",
    "pista": "Mechanisms."
  },
  {
    "question": "108. During which stage of the boot process would this message be seen? 'ide_setup:hdc=ide-scsi'",
    "options": [
      "A. Boot loader start and hand off to kernel",
      "B. Kernel loading",
      "C. Hardware initialization and setup",
      "D. Daemon initialization and setup"
    ],
    "answer": "B",
    "explicacion": "These types of device driver configuration messages occur during the kernel loading and initialization phase, before mounting the root filesystem.",
    "pista": "Kernel loading."
  },
  {
    "question": "109. Which TWO of the following statements about the tcp_wrappers configuration files are correct?",
    "options": [
      "A. Both files must be edited, to get tcp_wrappers to work properly",
      "B. It is possible to configure tcp_wrappers using just one file",
      "C. (x) inetd requires these files",
      "D. All programs that provide network services use these files to control access",
      "E. tcpd uses these files to control access to network services"
    ],
    "answer": "B, E",
    "explicacion": "tcpd (the wrapper) reads these files (/etc/hosts.allow and .deny). It is possible to use only hosts.allow (denying everything at the end) or only hosts.deny.",
    "pista": "One file and tcpd."
  },
  {
    "question": "110. Which option is used to configure pppd to use up to two DNS server addresses provided by the remote server?",
    "options": [
      "A. ms-dns",
      "B. nameserver",
      "C. usepeerdns",
      "D. dns",
      "E. None of the above"
    ],
    "answer": "E",
    "explicacion": "Although 'usepeerdns' is the common option, the official exam/dump often marks 'None' (E). However, in practice 'usepeerdns' is the key.",
    "pista": "Answer E (according to dump)."
  },
  {
    "question": "111. Which port must be open on a firewall, to allow a DNS server to receive queries? (Enter only the port number)",
    "answer": "53",
    "explicacion": "DNS uses port 53 (both UDP and TCP).",
    "pista": "Standard DNS port."
  },
  {
    "question": "112. Which program lists information about files opened by processes and produces output that can be parsed by other programs?",
    "answer": "lsof",
    "explicacion": "lsof (List Open Files) is the standard tool to see which files are being used by which processes.",
    "pista": "List open files."
  },
  {
    "question": "113. In a PAM configuration file, which of the following is true about the sufficient control flag?",
    "options": [
      "A. This PAM module is called if it is present, otherwise, further modules will be tried.",
      "B. This module is sufficient to determine both success or failure...",
      "C. Failure of this module will not be considered fatal and, if the module succeeds, success will be returned immediately...",
      "D. If a previous required module fails..."
    ],
    "answer": "C",
    "explicacion": "If a 'sufficient' module succeeds and no prior 'required' module failed, PAM grants access immediately without processing the rest of the stack.",
    "pista": "Immediate success if no prior failure."
  },
  {
    "question": "114. What is the default location for sendmail configuration files? (Provide the complete path)",
    "answer": "/etc/mail",
    "explicacion": "Sendmail stores its configuration files (sendmail.cf, aliases, access, etc.) in /etc/mail.",
    "pista": "Mail directory in etc."
  },
  {
    "question": "115. If there is no access directive, what is the default setting for OpenLDAP?",
    "options": [
      "A. access to* by anonymous read by* none",
      "B. access to* by anonymous read by* read",
      "C. access to* by anonymous auth by * read",
      "D. access to * by anonymous write by* read"
    ],
    "answer": "A",
    "explicacion": "The default policy is often restrictive if not defined, though answer A is the one marked correct in the source.",
    "pista": "Answer A."
  },
  {
    "question": "116. Which of the following sentences is TRUE about FreeS/WAN?",
    "options": [
      "A. FreeS/WAN doesn't support remote users...",
      "B. FreeS/WAN needs a patch to support NAT traversal for users behind a NAT gateway",
      "C. FreeS/WAN doesn't require any Linux kernel 2.4 modules...",
      "D. FreeS/WAN only enables the use of strong encryption...",
      "E. FreeS/WAN can't be used to establish a VPN..."
    ],
    "answer": "B",
    "explicacion": "Historically, FreeS/WAN (early IPsec implementation) required patches to traverse NAT (NAT Traversal).",
    "pista": "NAT patch."
  },
  {
    "question": "117. Which of the following commands is used to change user passwords in an OpenLDAP directory?",
    "options": [
      "A. passwd",
      "B. Idpasswd",
      "C. smbpasswd",
      "D. ldappasswd",
      "E. chpasswd"
    ],
    "answer": "D",
    "explicacion": "'ldappasswd' is the specific tool to modify the password (userPassword) on an LDAP server.",
    "pista": "LDAP passwd."
  },
  {
    "question": "118. What is a significant difference between host and zone keys generated by dnssec-keygen?",
    "options": [
      "A. There is no difference.",
      "B. Both zone key files (.key/.private) contain a public and private key.",
      "C. Both host keys files (.key/. private) contain a public and private key.",
      "D. Host Keys must always be generated...",
      "E. Zone Keys must always be generated..."
    ],
    "answer": "B",
    "explicacion": "This refers to a peculiarity in the generation or structure of zone key files in DNSSEC contexts.",
    "pista": "Answer B."
  },
  {
    "question": "119. In which file, on an INN news server, can access to the news server be configured? (Enter only the file name).",
    "answer": "readers.conf",
    "explicacion": "The 'readers.conf' file controls who can read or post news on the INN server.",
    "pista": "Readers configuration."
  },
  {
    "question": "120. A network client (192.168.0.0/24) needs to use the router 192.168.0.1 as default gateway. What needs to be done?",
    "options": [
      "A. Run route add default gw 192.168.0.1 eth1.",
      "B. Run route add gw 192.168.0.1 eth1.",
      "C. Run ifconfig eth0 defaultroute 192.168.0.1.",
      "D. Add 'defaultroute' to /etc/resolv.conf.",
      "E. Run route add defaultgw..."
    ],
    "answer": "A",
    "explicacion": "The correct command to add a default gateway is 'route add default gw <IP> <interface>'.",
    "pista": "Add default route."
  },
  
  {
    "question": "121. Which of the following would be the simplest way to configure BIND to return a different version number to queries?",
    "options": [
      "A. Compile BIND with the option -blur-version=my version.",
      "B. Set version-string \"my version\" in the configuration file.",
      "C. Set version \"my version\" in the configuration file.",
      "D. Set version my version in the configuration file.",
      "E. Set version-bind \"my version\" in the configuration file."
    ],
    "answer": "C",
    "explicacion": "The 'version' directive inside the 'options' block in named.conf allows hiding or changing the reported version for security.",
    "pista": "Version option."
  },
  {
    "question": "122. To allow an HTTPS connection to the server 10.12.34.56 from the client 192.168.43.12, which iptables rule is correct?",
    "options": [
      "A. iptables -A FORWARD -p tcp -s 0/0 -d 10.12.34.56 --dport 80 -j ACCEPT",
      "B. iptables -A FORWARD -p tcp -s 192.168.43.12 d 10.12.34.56:443 -j ACCEPT",
      "C. iptables -A FORWARD -p tcp -s 192.168.43.12 -d 10.12.34.56 --dport 443 -j ACCEPT",
      "D. iptables -A INPUT -p tcp -s 192.168.43.12 -d 10.12.34.56:80 -j ACCEPT",
      "E. iptables -A FORWARD -p tcp -s 0/0 -d 10.12.34.56 --dport 443 -j ACCEPT"
    ],
    "answer": "C",
    "explicacion": "Traffic passing through the firewall uses the FORWARD chain. HTTPS uses port 443.",
    "pista": "FORWARD and port 443."
  },
  {
    "question": "123. To prevent anonymous FTP users from listing uploaded file names, what security precaution can be taken when creating the upload directory?",
    "options": [
      "A. The directory should not have the execution permission.",
      "B. The directory should not have the read permission.",
      "C. The directory should not have the read or execution permissions.",
      "D. The directory should not have the write permission.",
      "E. The directory should not contain other directories."
    ],
    "answer": "B",
    "explicacion": "Without read permission (r), users cannot list the directory content ('ls'), but with write/execute they can still upload ('blind drop').",
    "pista": "No read permission."
  },
  {
    "question": "124. The command '-x foo' will delete the user foo from the Samba database. (Specify the command only, no path)",
    "answer": "smbpasswd",
    "explicacion": "The command 'smbpasswd -x user' removes the user from the Samba password database.",
    "pista": "Samba password."
  },
  {
    "question": "125. Which tool scans log files for failed login attempts and blocks the offending IP addresses with firewall rules?",
    "options": [
      "A. nessus",
      "B. nmap",
      "C. nc",
      "D. watchlogs",
      "E. fail2ban"
    ],
    "answer": "E",
    "explicacion": "fail2ban is the standard tool for intrusion prevention based on log analysis and dynamic banning.",
    "pista": "Fail to ban."
  },
  {
    "question": "126. Which Nginx configuration block is used to define the settings for a reverse proxy web server?",
    "options": [
      "A. server",
      "B. location",
      "C. reverse",
      "D. http"
    ],
    "answer": "B",
    "explicacion": "Proxy directives (like proxy_pass) are typically placed inside a 'location' block that matches the URL path to be proxied.",
    "pista": "Location."
  },
  {
    "question": "127. What is the standard port number for the unencrypted IMAP service?",
    "options": [
      "A. 25",
      "B. 143",
      "C. 443",
      "D. 993",
      "E. 1066"
    ],
    "answer": "B",
    "explicacion": "IMAP uses port 143 by default. IMAPS (encrypted) uses 993.",
    "pista": "IMAP port."
  },
  {
    "question": "128. Which option can be used to only allow access to a BIND DNS server from specified networks/hosts?",
    "options": [
      "A. Using the limit {...; }; statement",
      "B. Using the allow-query { ...; }; statement",
      "C. Using the answer-only { ...; }; statement",
      "D. Using the allow-answer {...; }; statement",
      "E. Using the query-access {...; }; statement"
    ],
    "answer": "B",
    "explicacion": "allow-query controls who is permitted to send queries to the server.",
    "pista": "Allow query."
  },
  {
    "question": "129. During which stage of the boot process would this message be seen? 'ide0: BM-DMA at 0xff00-0xff07, BIOS settings: hda: DMA, hdb: DMA'",
    "options": [
      "A. Boot loader start and hand off to kernel",
      "B. Kernel loading",
      "C. Hardware initialization and setup",
      "D. Daemon initialization and setup"
    ],
    "answer": "C",
    "explicacion": "This specific message about DMA and BIOS settings indicates hardware detection and initialization by the kernel.",
    "pista": "Hardware DMA."
  },
  {
    "question": "130. Which of the following Samba configuration parameters is functionally identical to the parameter 'read only = yes'?",
    "options": [
      "A. browseable = no",
      "B. read write = no",
      "C. writeable = no",
      "D. write only = no",
      "E. write access = no"
    ],
    "answer": "C",
    "explicacion": "'writeable' is an inverted synonym for 'read only'. Saying it is not writeable is the same as saying it is read-only.",
    "pista": "Not writeable."
  },
  {
    "question": "131. A BIND server needs to be updated to use TSIG with the hmac-md5 algorithm and key 'skrKc...'. Which configuration is correct?",
    "options": [
      "A. TSIG server... { algorithm hmac-md5; secret ...; };",
      "B. key server... { algorithm hmac-md5; secret skrKc...; };",
      "C. key server.example.com. { algorithm hmac-md5; secret \"skrKc...\"; };",
      "D. key server... { algorithm=hmac-md5; secret=\"...\"; };",
      "E. key server... { algorithm hmac-md5 secret \"...\" };"
    ],
    "answer": "C",
    "explicacion": "You define a 'key' with the server name, specifying the algorithm and the secret string in quotes.",
    "pista": "Key with quotes."
  },
  {
    "question": "132. A company changes its domain and wants to accept mail for both domains on a Postfix server. Which configuration option needs to be updated?",
    "options": [
      "A. mydomain",
      "B. mylocations",
      "C. mydestination",
      "D. myhosts",
      "E. mydomains"
    ],
    "answer": "C",
    "explicacion": "'mydestination' lists the domains that the server considers local and for which it will accept final delivery.",
    "pista": "My destination."
  },
  {
    "question": "133. Which tool can be used to create Certificate Signing Requests (CSR) for an Apache server with HTTPS?",
    "options": [
      "A. apachectl",
      "B. certgen",
      "C. csrtool",
      "D. httpsgen",
      "E. openssl"
    ],
    "answer": "E",
    "explicacion": "OpenSSL is the standard tool for managing keys, certificates, and CSRs.",
    "pista": "Standard SSL tool."
  },
  {
    "question": "134. A GRUB boot loader in the MBR was overwritten. After booting with a rescue CD, how can the GRUB stage 1 loader be recovered?",
    "options": [
      "A. Use dd to restore a previous backup of the MBR",
      "B. Install LILO",
      "C. Run mformat",
      "D. Run grub-install after verifying grub.conf",
      "E. Run fdisk --mbr /dev/hda"
    ],
    "answer": "D",
    "explicacion": "'grub-install' reinstalls the boot loader into the MBR based on the existing configuration.",
    "pista": "Install grub."
  },
  {
    "question": "135. Which of the following defines the maximum allowed article size in the INN configuration file?",
    "options": [
      "A. limitartsize",
      "B. artsizelimit",
      "C. maxartlimit",
      "D. maxartsize",
      "E. setartlimit"
    ],
    "answer": "D",
    "explicacion": "'maxartsize' specifies the maximum size of a news article that the server will accept.",
    "pista": "Max article size."
  },
  {
    "question": "136. Which server program will understand and be able to reply to NetBIOS Name Service requests?",
    "options": [
      "A. netbios",
      "B. nmbd",
      "C. smbd",
      "D. winbindd"
    ],
    "answer": "B",
    "explicacion": "'nmbd' is the Samba daemon responsible for the NetBIOS Name Service.",
    "pista": "NetBIOS daemon."
  },
  {
    "question": "137. Upon booting, LILO prints 'LIL' and stops. What is the cause?",
    "options": [
      "A. The descriptor table is bad (or media/geometry failure)",
      "B. LILO failed to load the second stage loader",
      "C. LILO failed to load the primary stage loader",
      "D. LILO failed to locate the kernel image"
    ],
    "answer": "A",
    "explicacion": "If LILO stops after printing part of its name, it indicates at which stage it failed. 'LIL-' or 'LIL' usually indicates failure loading the second stage due to incorrect disk geometry or corrupt descriptor table.",
    "pista": "Descriptor table or geometry."
  },
  {
    "question": "138. Which of the following lines in the Apache configuration would allow only clients with a valid certificate to access the website?",
    "options": [
      "A. SSLCA conf/ca.crt",
      "B. AuthType ssl",
      "C. IfModule libexec/ssl.c",
      "D. SSLRequire",
      "E. SSLVerifyClient require"
    ],
    "answer": "E",
    "explicacion": "'SSLVerifyClient require' forces the server to request and validate a client certificate to allow the connection.",
    "pista": "Verify client required."
  },
  {
    "question": "139. What is the name of the network security scanner project that, at its core, is a server with a set of Network Vulnerability Tests (NVTs)?",
    "options": [
      "A. nmap",
      "B. OpenVAS",
      "C. Snort",
      "D. wireshark"
    ],
    "answer": "B",
    "explicacion": "OpenVAS (Open Vulnerability Assessment System) uses NVTs.",
    "pista": "Vulnerability Assessment System."
  },
  {
    "question": "140. An administrator wants to execute an echo command once all scripts in /etc/rc2.d have been executed. What is the best way?",
    "options": [
      "A. Add the command to /etc/rc.local",
      "B. Create a script in ~/.kde/Autostart/",
      "C. Create a script in /etc/init.d/ and link it",
      "D. Create a script in /etc/rc2.d/"
    ],
    "answer": "A",
    "explicacion": "Historically in SysVinit systems, the /etc/rc.local script runs at the end of the boot process, after all normal runlevel scripts.",
    "pista": "Local script at end of boot."
  },
  {
    "question": "141. Which TWO commands could be used to add a second IP address to the interface eth0?",
    "options": [
      "A. ifconfig eth0 -add ip 192.168.123.10",
      "B. ifconfig eth0:1 192.168.123.10",
      "C. ifconfig eth0 1 192.168.123.10",
      "D. ifconfig eth0 +192.168.123.10",
      "E. ifconfig eth0:sub1 192.168.123.10"
    ],
    "answer": "B, E",
    "explicacion": "To add secondary IPs (aliasing) with ifconfig, the interface:label notation is used (e.g., eth0:1 or eth0:sub1).",
    "pista": "Interface aliasing with colon."
  },
  {
    "question": "142. A private OID should be obtained for use with OpenLDAP for a company when:",
    "options": [
      "A. The company intends to use a commercial LDAP schema.",
      "B. The company wants to make its directory available publicly.",
      "C. The company plans to create custom schema files for its directory.",
      "D. The company wishes to use an encrypted attribute."
    ],
    "answer": "C",
    "explicacion": "Unique OIDs (Object Identifiers) are required to define new custom objects and attributes without conflicting with existing standards.",
    "pista": "Custom schema."
  },
  {
    "question": "143. Besides nfsd and portmap, what other daemon must be running on an NFS server?",
    "answer": "mountd",
    "explicacion": "rpc.mountd is the daemon responsible for handling filesystem mount requests from clients.",
    "pista": "Mount daemon."
  },
  {
    "question": "144. What is the correct format for an entry in the ftpusers file?",
    "options": [
      "A. Use only a username on each line.",
      "B. Add a colon after each username.",
      "C. Add a semicolon after each username.",
      "D. Add ALLOW after each username.",
      "E. Add DENY after each username."
    ],
    "answer": "A",
    "explicacion": "The /etc/ftpusers file is a simple list of users who are DENIED access, with one username per line.",
    "pista": "One user per line."
  },
  {
    "question": "145. Which Apache directive is used to specify the authentication method, such as None or Basic?",
    "options": [
      "A. AuthUser",
      "B. AllowedAuthUser",
      "C. AuthType",
      "D. AllowAuth"
    ],
    "answer": "C",
    "explicacion": "The 'AuthType' directive defines the user authentication type (Basic, Digest, etc.).",
    "pista": "Authentication Type."
  },
  {
    "question": "146. Some users cannot connect to specific local hosts by name... If hosts are accessible by IP, which default log file might provide clues?",
    "options": [
      "A. /var/named/log",
      "B. /var/lib/named/dev/log",
      "C. /var/log/bind_errors",
      "D. /var/log/bind/errors",
      "E. /var/log/messages"
    ],
    "answer": "E",
    "explicacion": "By default, if no specific logging channel is configured in BIND, system and service error messages usually go to /var/log/messages (or syslog).",
    "pista": "General system log."
  },
  {
    "question": "147. The gateway connects clients to Internet using Squid. Only clients from 192.168.1.0/24 should be able to use the proxy. Which config is correct?",
    "options": [
      "A. acl local src 192.168.1.0/24; http_allow local",
      "B. acl local src 192.168.1.0/24; http_access allow local",
      "C. acl local src 192.168.1.0/24; http access allow local",
      "D. acl local src 192.168.1.0/24; http_access_allow=local",
      "E. acl local src 192.168.1.0/24; httpd local allow"
    ],
    "answer": "B",
    "explicacion": "First, the ACL is defined ('acl name src network'), and then the access rule is applied ('http_access allow name').",
    "pista": "http_access allow."
  },
  {
    "question": "148. Samba config has 'hosts allow' and 'hosts deny'. Laptop (192.168.2.93) accesses, but wired network (192.168.1.x) cannot. Which option allows wired network without denying anyone else?",
    "options": [
      "A. hosts allow= 192.168.1.1-255",
      "B. hosts allow= 192.168.1.100 192.168.2.200 localhost",
      "C. hosts deny= 192.168.1.100/255.255.255.0 ...",
      "D. hosts deny= 192.168.2.200/255.255.255.0 ...",
      "E. hosts allow= 192.168.1.0/255.255.255.0 192.168.2.0/255.255.255.0 localhost"
    ],
    "answer": "E",
    "explicacion": "Option E explicitly allows both subnets (wired .1.0 and wireless .2.0) and localhost, ensuring correct access.",
    "pista": "Allow both networks."
  },
  {
    "question": "149. Where should the line '$TTL 86400' be placed in a BIND zone file?",
    "options": [
      "A. As the first line of the zone file.",
      "B. In any zone file containing hints to root servers.",
      "C. In the SOA record of the zone file.",
      "D. It is required just before the A records are defined."
    ],
    "answer": "A",
    "explicacion": "The $TTL directive defines the default time-to-live for records that don't specify it, and it should appear at the beginning of the file, before the SOA record.",
    "pista": "First line."
  },
  {
    "question": "150. When configuring a PPP dial-in server, which option is used (in pppd) to enable user authentication against the system password database?",
    "options": [
      "A. login",
      "B. auth",
      "C. local",
      "D. password",
      "E. user"
    ],
    "answer": "A",
    "explicacion": "The 'login' option tells pppd to use the system user database (PAP/CHAP via /etc/passwd or PAM) for authentication.",
    "pista": "Login option."
  },
  {
    "question": "151. In the Postfix main configuration file, how are service definitions continued on the next line?",
    "options": [
      "A. It is not possible.",
      "B. The initial line must end with a backslash (\\).",
      "C. The next line must start with a plus sign (+).",
      "D. The next line must start with whitespace indentation.",
      "E. The definition continues until all fields are specified."
    ],
    "answer": "D",
    "explicacion": "Postfix follows the convention that a line starting with whitespace (space or tab) is a continuation of the previous line.",
    "pista": "Whitespace indentation."
  },
  {
    "question": "152. What happens when the Linux kernel cannot mount the root filesystem during boot?",
    "options": [
      "A. An error message is shown indicating which device failed or init was not found (Kernel panic).",
      "B. An error is shown and the system reboots after a keypress.",
      "C. An error is shown and the system boots into maintenance mode.",
      "D. The administrator is asked to specify a valid root filesystem.",
      "E. An error regarding unloaded modules is shown."
    ],
    "answer": "A",
    "explicacion": "If the kernel cannot mount root, it cannot load 'init', so the system halts with a 'Kernel panic: VFS: Unable to mount root fs'.",
    "pista": "Kernel panic or mount error."
  },
  {
    "question": "153. This program has 3 modes of operation: copy-in, copy-out, and copy-pass, and is used to copy files into or out of archives. What program is it?",
    "answer": "cpio",
    "explicacion": "cpio is a classic archiving tool that operates on input/output streams (modes -i, -o, -p).",
    "pista": "Copy-in/out modes."
  },
  {
    "question": "154. Which TWO of the following options are valid in the /etc/exports file?",
    "options": [
      "A. rw",
      "B. ro",
      "C. rootsquash",
      "D. norootsquash",
      "E. uid"
    ],
    "answer": "A, B",
    "explicacion": "rw (read/write) and ro (read-only) are valid basic options. (Note: root_squash has an underscore, so C and D are technically typos in this tricky question).",
    "pista": "Read and Write."
  },
  {
    "question": "155. Journaling doesn't seem to work on an ext3 filesystem. At boot: 'VFS: Mounted root (ext2 filesystem) read only'. What could be the cause?",
    "options": [
      "A. An old version of e2fsprogs was installed.",
      "B. The kernel does not contain support for ext3.",
      "C. The filesystem is specified as ext2 in /etc/fstab.",
      "D. The system was not shut down cleanly."
    ],
    "answer": "B",
    "explicacion": "If the kernel mounts an ext3 system as ext2, it usually means it lacks the ext3 driver and falls back to the compatible ext2 driver.",
    "pista": "Missing kernel support."
  },
  {
    "question": "156. Which command must be used to print the kernel routing table?",
    "options": [
      "A. route print",
      "B. route enumerate",
      "C. route show",
      "D. route list",
      "E. route"
    ],
    "answer": "E",
    "explicacion": "The 'route' command without arguments displays the current routing table.",
    "pista": "Route command alone."
  },
  {
    "question": "157. What can the tripwire program NOT check?",
    "options": [
      "A. File size.",
      "B. File signature.",
      "C. Permissions.",
      "D. File existence.",
      "E. Boot sectors."
    ],
    "answer": "E",
    "explicacion": "Tripwire is a filesystem integrity checker for files and directories, it does not check physical boot sectors (MBR).",
    "pista": "Boot sectors."
  },
  {
    "question": "158. Connecting via SSH with public key works, but X11 forwarding does not. Remote host allows both. What could be the reason?",
    "options": [
      "A. The remote user's ssh_config does not allow X11 forwarding.",
      "B. The remote server's sshd_config does not allow X11 forwarding.",
      "C. A different public key must be used for X11.",
      "D. X11 cannot be forwarded if public key authentication is used.",
      "E. X11 via SSH needs a special X11 server application."
    ],
    "answer": "B",
    "explicacion": "Even if the client requests it, if the server has 'X11Forwarding no' in /etc/ssh/sshd_config, the request will be denied.",
    "pista": "Server sshd config."
  },
  {
    "question": "159. When trying to reverse proxy a web server through Nginx, what keyword is missing? 'location / { ________ http://proxiedserver:8080; }'",
    "options": [
      "A. remote_proxy",
      "B. reverse_proxy",
      "C. proxy_reverse",
      "D. proxy_pass"
    ],
    "answer": "D",
    "explicacion": "'proxy_pass' is the fundamental directive to configure forwarding to a backend in Nginx.",
    "pista": "Pass to proxy."
  },
  {
    "question": "160. Which command is used to add a route to the network 192.168.4.0/24 via 192.168.0.2?",
    "options": [
      "A. route add -network ...",
      "B. route add -net 192.168.4.0/24 gw 192.168.0.2",
      "C. route add -network ...",
      "D. route add -net ...",
      "E. route add -net 192.168.4.0 netmask 255.255.255.0 gw 192.168.0.2"
    ],
    "answer": "E",
    "explicacion": "The most compatible classic syntax specifies the mask with 'netmask' and the gateway with 'gw'.",
    "pista": "Netmask and Gateway."
  },
  {
    "question": "161. Considering the following httpd.conf excerpt: '<Location /var/web/dir1> AllowOverride AuthConfig Indexes </Location>'. Which is correct?",
    "options": [
      "A. The Indexes directive allows other index directives.",
      "B. AuthConfig and Indexes in .htaccess will override httpd.conf.",
      "C. AuthConfig allows directives like AuthType.",
      "D. Incorrect because AllowOverride cannot be used with Indexes.",
      "E. Incorrect because AllowOverride cannot be used inside a Location section."
    ],
    "answer": "E",
    "explicacion": "The 'AllowOverride' directive is only valid within <Directory> sections (without regular expressions), not in <Location> or <Files>.",
    "pista": "AllowOverride only in Directory."
  },
  {
    "question": "162. Why is the root filesystem mounted read-only during boot and remounted rw later?",
    "options": [
      "A. So fsck can run without risk of damage if problems are detected.",
      "B. To prevent boot sniffers from gathering root info.",
      "C. To prevent writing to disk without root password.",
      "D. To prevent other OSs from overwriting the partition.",
      "E. Because the disk has write protection."
    ],
    "answer": "A",
    "explicacion": "Filesystem checks (fsck) must be performed on an unmounted or read-only mounted filesystem to prevent data corruption.",
    "pista": "Safety for fsck."
  },
  {
    "question": "163. The vsftpd program in a chroot jail gives error: 'libc.so.6: cannot open shared object file'. What is the solution?",
    "options": [
      "A. Edit /etc/ld.so.conf on root system.",
      "B. Create a symlink outside the jail.",
      "C. Copy the required library to the appropriate lib directory inside the chroot jail.",
      "D. Run program with --static_libs."
    ],
    "answer": "C",
    "explicacion": "A chrooted process cannot see anything outside its root directory. Shared libraries must physically exist inside the jail.",
    "pista": "Copy library inside."
  },
  {
    "question": "164. In a PAM configuration file, a 'sufficient' control allows access:",
    "options": [
      "A. Immediately if successful, if no prior 'required' control failed.",
      "B. Immediately if successful, regardless of other controls.",
      "C. After waiting for all other controls to succeed.",
      "D. Immediately, but only if user is root."
    ],
    "answer": "A",
    "explicacion": "If a 'sufficient' module succeeds, PAM returns success immediately to the application, provided no previous 'required' module has failed.",
    "pista": "Conditional immediate success."
  },
  {
    "question": "165. Which of the following are predefined targets for netfilter rules? (Choose TWO)",
    "options": [
      "A. JUMP",
      "B. REROUTE",
      "C. NAT",
      "D. ACCEPT",
      "E. RETURN"
    ],
    "answer": "D, E",
    "explicacion": "ACCEPT, DROP, QUEUE, and RETURN are standard built-in targets. JUMP is an action, not a target itself.",
    "pista": "Accept and Return."
  },
  {
    "question": "166. What is the purpose of a PTR record?",
    "options": [
      "A. Provide name-to-IP resolution.",
      "B. Provide IP-to-name resolution.",
      "C. Direct mail to specific host.",
      "D. Provide additional host info.",
      "E. Direct clients to another nameserver."
    ],
    "answer": "B",
    "explicacion": "Pointer (PTR) records are used in reverse lookup zones to map an IP address to a canonical domain name.",
    "pista": "IP to Name."
  },
  {
    "question": "167. In /var/squid/url_blacklist there is a list of forbidden URLs. What is the correct entry in squid.conf to create an ACL based on this file?",
    "options": [
      "A. acl blacklist urlpath_regex /var/squid/url_blacklist",
      "B. acl blacklist file /var/squid/url_blacklist",
      "C. acl blacklist \"/var/squid/url_blacklist\"",
      "D. acl blacklist urlpath_regex \"/var/squid/url_blacklist\"",
      "E. acl urlpath_regex blacklist /var/squid/url_blacklist"
    ],
    "answer": "D",
    "explicacion": "The syntax is 'acl <name> <type> <value>'. For an external file, the path must be quoted. 'urlpath_regex' allows regex on the URL path.",
    "pista": "Quoted path."
  },
  {
    "question": "168. Which of the following commands can obtain entries from the NIS administrative group database?",
    "options": [
      "A. ypserv group",
      "B. getent group",
      "C. rpcinfo group",
      "D. ypbind group",
      "E. yppoll group"
    ],
    "answer": "B",
    "explicacion": "'getent' is the generic tool to query system databases (like passwd, group, hosts) supported by NSS, including NIS.",
    "pista": "Get entry."
  },
  {
    "question": "169. Which command would configure interface eth1:1 with IP 10.10.3.4 and netmask 255.255.255.0?",
    "options": [
      "A. ifconfig eth1:1 10.10.3.4 netmask 255.255.255.0 start",
      "B. ifconfig 10.10.3.4 netmask 255.255.255.0 eth1:1 up",
      "C. ifconfig eth1:1 10.10.3.4 netmask 255.255.255.0 up",
      "D. ifconfig 10.10.3.4/255.255.255.0 eth1:1 up",
      "E. ifconfig eth1:1 10.10.3.4/255.255.255.0 up"
    ],
    "answer": "C",
    "explicacion": "The classic syntax is 'ifconfig <interface> <ip> netmask <mask> up'.",
    "pista": "Interface first, then IP, then mask."
  },
  {
    "question": "170. Which command can be used to verify the Samba configuration file?",
    "options": [
      "A. testconfig",
      "B. testsmbconfig",
      "C. smbtestcfg",
      "D. smbtestparm",
      "E. testparm"
    ],
    "answer": "E",
    "explicacion": "'testparm' checks the syntax of smb.conf and displays the effective configuration.",
    "pista": "Test parameters."
  },
  {
    "question": "171. What is the command to add another IP address to an interface that already has one (IP alias)?",
    "options": [
      "A. ifconfig eth0:1 192.168.1.2",
      "B. ifconfig eth0 192.168.1.2",
      "C. ipconfig eth0:1 192.168.1.2",
      "D. ipconfig eth0 192.168.1.2"
    ],
    "answer": "A",
    "explicacion": "In Linux (net-tools), IP aliases are created by appending a colon and a number to the interface name (eth0:1).",
    "pista": "Colon and number."
  },
  {
    "question": "172. A network has many printers that should always get the same IP via DHCP. What information from each printer is needed to configure this in dhcpd?",
    "options": [
      "A. MAC address",
      "B. Host name",
      "C. Serial number",
      "D. Factory default IP address",
      "E. Built-in network card type"
    ],
    "answer": "A",
    "explicacion": "DHCP reservations are based on the physical address (MAC) of the client's network card ('hardware ethernet').",
    "pista": "Physical address."
  },
  {
    "question": "173. Which commands can be used to connect and interact with remote services? (Choose TWO)",
    "options": [
      "A. nettalk",
      "B. nc",
      "C. telnet",
      "D. cat",
      "E. netmap"
    ],
    "answer": "B, C",
    "explicacion": "'nc' (netcat) and 'telnet' allow establishing raw TCP/UDP connections to test services.",
    "pista": "Netcat and Telnet."
  },
  {
    "question": "174. According to tcpdump output (IP 192.168.246.11.1045 > 192.168.246.1.22), what is the client IP address?",
    "answer": "192.168.246.11",
    "explicacion": "The client initiates the connection (high port 1045) towards the server (port 22, SSH). The source address in the first packet is the client.",
    "pista": "High port user."
  },
  {
    "question": "175. In which configuration file can a key-file be defined to enable secure DNS zone transfers? (File name only)",
    "answer": "named.conf",
    "explicacion": "TSIG keys and ACLs for transfers are configured in the main BIND file: named.conf.",
    "pista": "Named config."
  },
  {
    "question": "176. Apache basic auth is used against /srv/www/security/site-passwd. Which command CHANGES the password of an existing user without losing data?",
    "options": [
      "A. htpasswd -c ...",
      "B. htpasswd /srv/www/security/site-passwd user",
      "C. htpasswd -n ...",
      "D. htpasswd -D ...",
      "E. None of the above."
    ],
    "answer": "B",
    "explicacion": "Using 'htpasswd' without the '-c' (create) option updates an existing user or adds a new one to an existing file.",
    "pista": "No create flag."
  },
  {
    "question": "177. Which parameter in sshd_config instructs sshd to prohibit login to specific usernames?",
    "answer": "DenyUsers",
    "explicacion": "DenyUsers specifies a list of users who are not allowed to access, overriding other settings.",
    "pista": "Deny users."
  },
  {
    "question": "178. In a PAM configuration file, what is true about the 'required' control flag?",
    "options": [
      "A. If successful, no more modules are invoked.",
      "B. If it fails, control returns immediately.",
      "C. Success is necessary; however, all remaining modules of the same type are still invoked.",
      "D. The module is not critical.",
      "E. If it fails, no more modules are invoked."
    ],
    "answer": "C",
    "explicacion": "A failure in 'required' marks the authentication as failed, but PAM continues executing the rest of the stack to avoid revealing which specific part failed.",
    "pista": "Deferred failure, complete execution."
  },
  {
    "question": "179. If no ACL lines are included in slapd.conf, what is the default behavior of slapd?",
    "options": [
      "A. Allow anyone to read any entry.",
      "B. Deny read to everyone.",
      "C. Only userPassword protected.",
      "D. Access only from local."
    ],
    "answer": "A",
    "explicacion": "Historically in OpenLDAP, if no access rules are defined, the default behavior was to allow world read access to everything.",
    "pista": "Everything open by default."
  },
  {
    "question": "180. Which of the following procmail recipes will append 'root' emails to the 'rootmails' mailbox?",
    "options": [
      "A. :0c: rootmails * ^From.*root",
      "B. :0c: * ^From.*root rootmails",
      "C. :0c: * ^From=root rootmails",
      "D. :0c: * ^From=*root rootmails",
      "E. :0c: $From=$root rootmails"
    ],
    "answer": "B",
    "explicacion": "Syntax: start (:0), flags (c:), condition (* regex), and finally destination. Option B follows the correct order: Condition -> Destination.",
    "pista": "Syntax: Recipe, Condition, Action."
  },
  
  
  {
    "question": "181. Please enter one of the configuration directives for the Apache HTTP server that defines where log files are stored.",
    "answer": "ErrorLog",
    "explicacion": "ErrorLog (or CustomLog, TransferLog) defines the location of log files.",
    "pista": "Log directive."
  },
  {
    "question": "182. How can the default shell for a user be checked by querying the NIS server?",
    "options": [
      "A. ypquery user@example.com",
      "B. ypgrep user example.com",
      "C. ypmatch -d example.com user passwd",
      "D. ypcat -d example.com user",
      "E. ypq @example.com user +shell"
    ],
    "answer": "D",
    "explicacion": "Although 'ypmatch user passwd' is the precise command, option D (or variations involving ypcat/ypmatch on the passwd map) is often the expected answer in this exam context for querying user info.",
    "pista": "Query NIS map."
  },
  {
    "question": "183. LDAP authentication is not working. The file /etc/pam.d/login includes the following line. Which of the following lines is NOT correct? 'auth required /lib/security/pam_ldap.so'",
    "options": [
      "A. password required ...",
      "B. auth sufficient ...",
      "C. account sufficient ...",
      "D. password required ...",
      "E. auth required /lib/security/pam_ldap.so"
    ],
    "answer": "E",
    "explicacion": "Using 'auth required' for LDAP prevents local login if the LDAP server is unreachable. It should be 'sufficient' or combined with a local fallback.",
    "pista": "Too strict for LDAP."
  },
  {
    "question": "184. Please enter the name of the main configuration file for majordomo (without path).",
    "answer": "majordomo.cf",
    "explicacion": "The main configuration file for Majordomo is majordomo.cf.",
    "pista": "Majordomo config."
  },
  {
    "question": "185. Which TWO of the following statements concerning xinetd and inetd are correct?",
    "options": [
      "A. xinetd supports access control based on time",
      "B. xinetd only supports TCP",
      "C. xinetd is faster",
      "D. xinetd includes support for X",
      "E. xinetd and inetd are used to reduce the number of daemons running"
    ],
    "answer": "A, E",
    "explicacion": "Both superservers reduce running daemons. xinetd adds advanced features like time-based access control.",
    "pista": "Time control and resource saving."
  },
  {
    "question": "186. An SSH tunnel was invoked with: 'ssh -L 80:www.example.com:80 user@www.example.com'. Which TWO statements are correct?",
    "options": [
      "A. The client can connect to http://www.example.com and it will be encrypted.",
      "B. The client can connect to http://localhost and the connection will be encrypted (up to the SSH server).",
      "C. Only possible using http://localhost.",
      "D. Only for insecure interactive services.",
      "E. The client can connect to http://www.example.com but it will not be encrypted."
    ],
    "answer": "B, E",
    "explicacion": "The tunnel maps the local port 80 to the remote server. Connecting to localhost uses the tunnel (encrypted). Connecting directly to the domain name uses the standard network (unencrypted).",
    "pista": "Localhost encrypted, direct not."
  },
  {
    "question": "187. Which statements about the Alias and Redirect directives in Apache are true? (Choose two)",
    "options": [
      "A. Alias only references files under DocumentRoot.",
      "B. Redirect works with regular expressions.",
      "C. Redirect is handled on the client side.",
      "D. Alias is handled on the server side.",
      "E. Alias is not valid."
    ],
    "answer": "C, D",
    "explicacion": "Alias maps a URL to a filesystem path (server-side). Redirect sends a new URL to the client.",
    "pista": "Server vs Client."
  },
  {
    "question": "188. Which of these tools can provide the most information about DNS queries?",
    "options": [
      "A. dig",
      "B. nslookup",
      "C. host",
      "D. named-checkconf",
      "E. named-checkzone"
    ],
    "answer": "A",
    "explicacion": "dig (Domain Information Groper) provides detailed information about the DNS query and response.",
    "pista": "Detailed DNS tool."
  },
  {
    "question": "189. After moving a user to a new subnet, they receive 'Connection closed by remote host' when connecting via SSH. Which TWO causes are possible?",
    "options": [
      "A. Generate a new host key.",
      "B. Verify /etc/hosts.allow and /etc/hosts.deny.",
      "C. Clear ARP table.",
      "D. Add IP to AllowHosts.",
      "E. Check netfilter rules (firewall)."
    ],
    "answer": "B, E",
    "explicacion": "Immediate connection closure suggests an access control rejection by TCP Wrappers or a firewall rule filtering by source IP.",
    "pista": "Wrappers and Firewall."
  },
  {
    "question": "190. OpenSSH cannot hide its version without recompiling. What is the main reason?",
    "options": [
      "A. Information needed for protocol compatibility adjustments.",
      "B. SSH server surveys.",
      "C. Security by obscurity does not work.",
      "D. Network auditing."
    ],
    "answer": "A",
    "explicacion": "The version string is required for the client and server to negotiate compatibility features and workarounds.",
    "pista": "Protocol compatibility."
  },
  {
    "question": "191. The route command shows flags '!H' for a host. What does this mean?",
    "options": [
      "A. Invalid route.",
      "B. Host down.",
      "C. The route to the host is rejected by the kernel.",
      "D. Traffic discarded.",
      "E. Route unavailable."
    ],
    "answer": "C",
    "explicacion": "The '!' flag indicates a rejected route, and 'H' indicates a host route.",
    "pista": "Rejected by kernel."
  },
  {
    "question": "192. Which of the following is a valid Squid option to define a listening port?",
    "options": [
      "A. port=3128",
      "B. http-listen-port=3128",
      "C. http_port 3128",
      "D. squid_port 3128"
    ],
    "answer": "C",
    "explicacion": "The correct directive is 'http_port'.",
    "pista": "HTTP port."
  },
  {
    "question": "193. With which character in the share name in smb.conf can a share be hidden?",
    "answer": "$",
    "explicacion": "Appending '$' to the share name hides it from the browse list.",
    "pista": "Dollar sign."
  },
  {
    "question": "194. Which file needs to be modified to enable anonymous FTP logins with vsftpd?",
    "options": [
      "A. /etc/vsftpd/ftpd.conf",
      "B. /etc/ftpd.conf",
      "C. /etc/vsftpd/anon.conf",
      "D. /etc/vsftpd.conf",
      "E. /etc/vsftp/ftp.conf"
    ],
    "answer": "D",
    "explicacion": "The main configuration file is typically /etc/vsftpd.conf or /etc/vsftpd/vsftpd.conf.",
    "pista": "Main config file."
  },
  {
    "question": "195. Which statement is true regarding ISC DHCP?",
    "options": [
      "A. Does not support BOOTP.",
      "B. Sends DHCPNAK by default to inappropriate addresses.",
      "C. Not suitable for X terminals.",
      "D. Can be configured to assign addresses only to known clients.",
      "E. None."
    ],
    "answer": "D",
    "explicacion": "Using 'deny unknown-clients', the server will only assign IPs to hosts with a specific reservation.",
    "pista": "Known clients only."
  },
  {
    "question": "196. Which file must be edited so that the route command shows human-readable names for networks?",
    "answer": "/etc/networks",
    "explicacion": "The /etc/networks file maps network addresses to names.",
    "pista": "Networks file."
  },
  {
    "question": "197. Running tcpdump shows 'icmp 64: echo request'. What command generated this?",
    "answer": "ping",
    "explicacion": "The ping command generates ICMP Echo Request packets.",
    "pista": "ICMP echo."
  },
  {
    "question": "198. Select the correct way to disable user login (except root).",
    "options": [
      "A. pam_nologin with /etc/login",
      "B. pam_deny with /etc/deny",
      "C. pam_pwdb ...",
      "D. pam_console ...",
      "E. Use of pam_nologin module along with /etc/nologin"
    ],
    "answer": "E",
    "explicacion": "If /etc/nologin exists, pam_nologin prevents non-root users from logging in.",
    "pista": "nologin file."
  },
  {
    "question": "199. What is the advantage of using SASL authentication with OpenLDAP?",
    "options": [
      "A. Can prevent transmission of passwords in clear text.",
      "B. Disables anonymous access.",
      "C. Enables ACLs.",
      "D. Allows system user authentication.",
      "E. All of the above."
    ],
    "answer": "A",
    "explicacion": "SASL supports mechanisms that avoid sending the password in plain text across the network.",
    "pista": "No plain text."
  },
  {
    "question": "200. When the default policy for INPUT is DROP, why must a rule exist for localhost?",
    "options": [
      "A. Must always be allowed.",
      "B. Doesn't matter.",
      "C. Sendmail delivers to localhost.",
      "D. Some applications use the localhost interface to communicate with other applications.",
      "E. syslogd receives messages."
    ],
    "answer": "D",
    "explicacion": "Many applications use the loopback interface for Inter-Process Communication (IPC).",
    "pista": "IPC."
  },
  {
    "question": "201. How must Samba be configured so that it can check passwords against /etc/passwd and /etc/shadow?",
    "options": [
      "A. Set 'encrypt passwords = yes' and 'password file = /etc/passwd'.",
      "B. Set 'encrypt passwords = yes', 'password file = /etc/passwd' and algorithm crypt.",
      "C. Delete smbpasswd and symlink to passwd.",
      "D. It is not possible for Samba to use /etc/passwd and /etc/shadow directly.",
      "E. Run smbpasswd to convert."
    ],
    "answer": "D",
    "explicacion": "Samba uses NTLM hashes, which are different from Unix crypt/SHA hashes, so it cannot validate directly against shadow.",
    "pista": "Not possible directly."
  },
  {
    "question": "202. What is the name of the configuration variable in Dovecot that specifies the location of user mail?",
    "options": [
      "A. mbox",
      "B. mail_location",
      "C. user_dir",
      "D. maildir",
      "E. user_mail_dir"
    ],
    "answer": "B",
    "explicacion": "'mail_location' defines where and in what format emails are stored.",
    "pista": "Mail location."
  },
  {
    "question": "203. In the following DHCP config section: 'option ... 192.168.1.254;'. What keyword is missing to provide a default gateway?",
    "options": [
      "A. gateway",
      "B. nexthop",
      "C. route",
      "D. routers",
      "E. transit"
    ],
    "answer": "D",
    "explicacion": "The 'routers' option specifies the default gateway(s).",
    "pista": "Routers."
  },
  {
    "question": "204. To allow X connections to be forwarded through an SSH server, what line must exist in the sshd configuration file?",
    "answer": "X11Forwarding yes",
    "explicacion": "This directive enables X11 tunneling.",
    "pista": "X11 Forwarding yes."
  },
  {
    "question": "205. If Apache has the directive 'UserDir site/html' and users are in /home, what local file is served when requesting http://server/~joe/index.html?",
    "answer": "/home/joe/site/html/index.html",
    "explicacion": "The UserDir path is appended to the user's home directory.",
    "pista": "Path concatenation."
  },
  {
    "question": "206. Which Apache directive is used to specify the RSA private key used in SSL certificate generation?",
    "options": [
      "A. SSLCertificateKeyFile",
      "B. SSLKeyFile",
      "C. SSLPrivateKeyFile",
      "D. SSLRSAKeyFile"
    ],
    "answer": "A",
    "explicacion": "'SSLCertificateKeyFile' points to the private key file.",
    "pista": "Certificate Key File."
  },
  {
    "question": "207. When the default policy for INPUT in netfilter is DROP, why must a rule exist that allows traffic to localhost?",
    "options": [
      "A. All traffic to localhost must always be allowed.",
      "B. Doesn't matter.",
      "C. Some applications use the localhost interface to communicate with other applications.",
      "D. syslogd receives messages on localhost."
    ],
    "answer": "C",
    "explicacion": "Local applications use loopback for internal communication.",
    "pista": "Internal communication."
  },
  {
    "question": "208. The mail server is discovered to be an 'open relay'. Which TWO actions would help prevent this?",
    "options": [
      "A. Restrict Postfix to only accept mail for domains hosted on this server.",
      "B. Configure Dovecot to support IMAP.",
      "C. Configure netfilter to block port 25.",
      "D. Restrict Postfix to only relay SMTP from the internal network.",
      "E. Update mailbox format."
    ],
    "answer": "A, D",
    "explicacion": "Restricting accepted domains (mydestination) and allowed relay networks (mynetworks) secures the server.",
    "pista": "My destination and internal network."
  },
  {
    "question": "209. A server is being used as a 'smurf' amplifier (replies to broadcast pings). What command disables this?",
    "options": [
      "A. ifconfig eth0 nobroadcast",
      "B. echo \"0\" > /proc/sys/net/ipv4/icmp_echo_accept_broadcasts",
      "C. iptables -A INPUT -p icmp -j REJECT",
      "D. echo \"1\" > /proc/sys/net/ipv4/icmp_echo_ignore_broadcasts",
      "E. echo \"1\" > /proc/sys/net/ipv4/icmp_echo_nosmurf"
    ],
    "answer": "D",
    "explicacion": "Setting 'icmp_echo_ignore_broadcasts' to 1 tells the kernel to ignore ICMP requests sent to broadcast addresses.",
    "pista": "Ignore broadcast echo."
  },
  {
    "question": "210. An SSH server uses tcp_wrappers and should only allow the network 192.168.1.0. Which line in /etc/hosts.allow achieves this?",
    "options": [
      "A. ALLOW: 192.168.1.0/255.255.255.0: sshd",
      "B. sshd: 192.168.1.0/255.255.255.0: ALLOW",
      "C. 192.168.1.0/255.255.255.0: ALLOW: sshd",
      "D. tcpd sshd: 192.168.1.0/255.255.255.0: ALLOW",
      "E. sshd: ALLOW: 192.168.1.0/255.255.255.0"
    ],
    "answer": "B",
    "explicacion": "The syntax 'daemon: client: action' (sshd: network: ALLOW) is correct for hosts.allow.",
    "pista": "Daemon: Client: Action."
  },
  {
    "question": "211. According to tcpdump: 'IP 192.168.123.5.1065 > 192.168.5.112.53: 43653+ A? lpi.org'. Which protocol was used?",
    "options": [
      "A. FTP",
      "B. HTTP",
      "C. SSH",
      "D. DNS",
      "E. DHCP"
    ],
    "answer": "D",
    "explicacion": "Port 53 and the query format (A? lpi.org) identify the DNS protocol.",
    "pista": "Port 53."
  },
  {
    "question": "212. What is true if a server uses PAM authentication and both /etc/pam.conf and /etc/pam.d/ exist?",
    "options": [
      "A. Causes errors.",
      "B. /etc/pam.conf will be ignored.",
      "C. /etc/pam.d/ will be ignored.",
      "D. Both are used, pam.d has priority.",
      "E. Both are used, pam.conf has priority."
    ],
    "answer": "B",
    "explicacion": "If the /etc/pam.d/ directory exists, the legacy /etc/pam.conf file is ignored.",
    "pista": "Directory beats file."
  },
  {
    "question": "213. Where is the procmail configuration stored for user 'foo' if homes are in /home? (Full path)",
    "answer": "/home/foo/.procmailrc",
    "explicacion": "The personal configuration is in the hidden file .procmailrc in the user's home.",
    "pista": "Home .procmailrc."
  },
  {
    "question": "214. Which option in the OpenVPN client file tells it to use a dynamic source port?",
    "options": [
      "A. src-port",
      "B. remote",
      "C. source-port",
      "D. nobind"
    ],
    "answer": "D",
    "explicacion": "'nobind' allows OpenVPN to use any available dynamic port on the client side.",
    "pista": "No bind."
  },
  {
    "question": "215. To allow X11 forwarding in SSH, what keyword must be 'yes' in sshd_config?",
    "options": [
      "A. AllowForwarding",
      "B. ForwardingAllow",
      "C. X11ForwardingAllow",
      "D. X11Forwarding"
    ],
    "answer": "D",
    "explicacion": "The directive is 'X11Forwarding'.",
    "pista": "X11Forwarding."
  },
  {
    "question": "216. Which parameter in sshd_config instructs sshd to allow ONLY specific usernames?",
    "answer": "AllowUsers",
    "explicacion": "AllowUsers restricts access to only the listed users.",
    "pista": "Allow users."
  },
  {
    "question": "217. What information is found in the status file of an OpenVPN server? (Choose TWO)",
    "options": [
      "A. Errors and warnings.",
      "B. Routing information.",
      "C. Daemon statistics.",
      "D. A list of currently connected clients.",
      "E. History of all clients."
    ],
    "answer": "B, D",
    "explicacion": "The status file contains the current routing table and the list of connected clients.",
    "pista": "Routes and clients."
  },
  {
    "question": "218. Where must the LILO code reside on a system with only Linux installed?",
    "options": [
      "A. In the Master Boot Record (MBR).",
      "B. In the boot sector.",
      "C. In the /boot directory.",
      "D. At the start of the kernel."
    ],
    "answer": "A",
    "explicacion": "LILO needs to be in the MBR to boot the system directly.",
    "pista": "MBR."
  },
  {
    "question": "219. Using dig, you see a strange answer in the AUTHORITY section. What could be wrong?",
    "options": [
      "A. Nothing.",
      "B. Missing dot after name in PTR forward.",
      "C. Missing dot in PTR.",
      "D. Missing dot '.' after linuserv.example.net in the PTR record of the reverse zone.",
      "E. Dot in NS definition should be removed."
    ],
    "answer": "D",
    "explicacion": "Missing a trailing dot in a zone file causes the domain to be appended again, creating invalid names.",
    "pista": "Missing trailing dot."
  },
  {
    "question": "220. How must Samba be configured to verify passwords against /etc/passwd and /etc/shadow?",
    "options": [
      "A. encrypt passwords = yes, password file = /etc/passwd.",
      "B. encrypt passwords = yes, password algorithm = crypt.",
      "C. Create symlink.",
      "D. It is not possible for Samba to use /etc/passwd and shadow directly.",
      "E. Convert with smbpasswd."
    ],
    "answer": "D",
    "explicacion": "Samba requires its own password database (hashes) and cannot read Unix hashes directly.",
    "pista": "Not directly."
  },
  {
    "question": "221. Which network service or protocol does sendmail use for RBLs (Real-time Blackhole Lists)?",
    "options": [
      "A. RBLP",
      "B. SMTP",
      "C. FTP",
      "D. HTTP",
      "E. DNS"
    ],
    "answer": "E",
    "explicacion": "RBL lookups are performed using DNS queries.",
    "pista": "DNS lookup."
  },
  {
    "question": "222. Running sysctl has the same effect as:",
    "options": [
      "A. Changing compilation parameters.",
      "B. Writing to files within /proc.",
      "C. Using ulimit.",
      "D. Editing /etc/sysconfig.",
      "E. No equivalent."
    ],
    "answer": "B",
    "explicacion": "sysctl modifies kernel parameters exposed in the /proc/sys filesystem.",
    "pista": "Write to proc."
  },
  {
    "question": "223. Mail server is named 'fred', but MX points to 'mailhost.example.org'. What must be done to direct mail to fred?",
    "options": [
      "A. Add an A record for mailhost with fred's IP.",
      "B. Add a CNAME from mailhost to fred.",
      "C. Add another MX pointing to fred.",
      "D. Add a PTR from mailhost to fred."
    ],
    "answer": "A",
    "explicacion": "The MX record must point to a hostname that has an A record (IP address).",
    "pista": "A record for MX name."
  },
  {
    "question": "224. You have to mount /data from an NFS server (srv1) that does not support locking. Which command to use?",
    "options": [
      "A. mount -a -t nfs",
      "B. mount -o locking off ...",
      "C. mount -o nolocking ...",
      "D. mount -o nolock srv1:/data /mnt/data",
      "E. mount -o nolock /data@srv1 ..."
    ],
    "answer": "D",
    "explicacion": "The '-o nolock' option disables NFS file locking.",
    "pista": "nolock option."
  },
  {
    "question": "225. Where is the procmail configuration stored for user 'foo'?",
    "answer": "/home/foo/.procmailrc",
    "explicacion": "Hidden file in home directory.",
    "pista": "Home .procmailrc."
  },
  {
    "question": "226. A monitoring service checks a database on port 5432. To avoid sending the password in clear text, which SSH command creates a tunnel?",
    "options": [
      "A. ssh -L 5432:127.0.0.1:5432 destination",
      "B. ssh -L 5432:destination:5432 127.0.0.1",
      "C. ssh -L 5432:127.0.0.1:5432 destination.example.com",
      "D. ssh -x ...",
      "E. ssh -R ..."
    ],
    "answer": "C",
    "explicacion": "Tunnel syntax: -L local_port:target_host:target_port. Targeting 127.0.0.1 on the remote side tunnels to the remote server itself.",
    "pista": "LocalForward to remote localhost."
  },
  {
    "question": "227. INN configuration has changed and must be used as soon as possible. What is the fastest way?",
    "options": [
      "A. ctlinnd kill hup",
      "B. kill -HUP pid",
      "C. ctlinnd xexec innd",
      "D. ctlinnd reload innd",
      "E. /usr/sbin/innd reload"
    ],
    "answer": "C",
    "explicacion": "'ctlinnd xexec innd' restarts the innd server process to reload configuration without dropping connections.",
    "pista": "xexec."
  },
  {
    "question": "228. procmail excerpt: ':0 c ... ! backup'. What does it do?",
    "options": [
      "A. All mails backed up to $MAILDIR.",
      "B. Mails to 'backup' saved.",
      "C. Copy of all mails saved to backup file.",
      "D. A copy of all mails is sent to the local email address 'backup'.",
      "E. Emails not for backup filtered."
    ],
    "answer": "D",
    "explicacion": "'c' means copy, '!' means forward. So it forwards a copy to the 'backup' address.",
    "pista": "Copy and forward."
  },
  {
    "question": "229. What security precaution should be taken when creating an anonymous FTP upload directory?",
    "options": [
      "A. No execution permission.",
      "B. No read permission.",
      "C. No read or execution.",
      "D. No write.",
      "E. No subdirectories."
    ],
    "answer": "B",
    "explicacion": "Removing read permission prevents users from seeing what others have uploaded.",
    "pista": "No read."
  },
  {
    "question": "230. Kernel doesn't boot, cannot find root filesystem after restore. Which command fixes this by pointing to the correct partition?",
    "options": [
      "A. mkbootdisk",
      "B. tune2fs",
      "C. rdev",
      "D. grub-install",
      "E. fdisk"
    ],
    "answer": "C",
    "explicacion": "'rdev' is a legacy tool to set the root device in a kernel image.",
    "pista": "Root device tool."
  },
  {
    "question": "231. Which Apache directive enables HTTPS protocol support?",
    "options": [
      "A. HTTPSEngine",
      "B. SSLEngine",
      "C. SSLEnable",
      "D. HTTPSEnable"
    ],
    "answer": "B",
    "explicacion": "'SSLEngine on' enables SSL/TLS.",
    "pista": "SSL Engine."
  },
  {
    "question": "232. What does the command testparm confirm about Samba configuration?",
    "options": [
      "A. That the configuration file will load successfully (correct syntax).",
      "B. That services will operate as expected.",
      "C. That Samba will start at boot.",
      "D. That firewall is not blocking."
    ],
    "answer": "A",
    "explicacion": "testparm only verifies the syntax validity of smb.conf.",
    "pista": "Syntax check."
  },
  {
    "question": "233. Concerning the excerpt: '<Files private.html> Order allow,deny Deny from all </Files>', select TWO correct statements.",
    "options": [
      "A. It will deny access to any 'private.html' found under the directory.",
      "B. Deny access at root but not subdirs.",
      "C. Allow access only to private.html.",
      "D. Allow access only to that file.",
      "E. The configuration will allow access to /var/web/private.html if it exists (Note: Dump answer A/E, logically it denies)."
    ],
    "answer": "A, E",
    "explicacion": "It blocks access to files named 'private.html'. (Answer E matches exam dump pattern despite logical contradiction).",
    "pista": "Block file everywhere."
  },
  {
    "question": "234. Which Apache directive specifies the types of directives allowed in .htaccess files?",
    "options": [
      "A. AllowExternalConfig",
      "B. AllowAccessFile",
      "C. AllowConfig",
      "D. AllowOverride"
    ],
    "answer": "D",
    "explicacion": "AllowOverride controls .htaccess permissions.",
    "pista": "Allow Override."
  },
  {
    "question": "235. Which service must be started first on an NFS server?",
    "options": [
      "A. mountd",
      "B. nfsd",
      "C. portmap",
      "D. statd"
    ],
    "answer": "C",
    "explicacion": "portmap (rpcbind) is required for RPC services like NFS.",
    "pista": "Port mapper."
  },
  {
    "question": "236. What is needed to synchronize Unix password with Samba when Samba password changes?",
    "options": [
      "A. Nothing.",
      "B. netvamp.",
      "C. winbind --sync.",
      "D. Add 'unix password sync = yes' to smb.conf.",
      "E. Add 'smb unix password = sync'."
    ],
    "answer": "D",
    "explicacion": "The 'unix password sync' parameter enables this feature.",
    "pista": "Sync enabled."
  },
  {
    "question": "237. Instead of echo 1 > /proc..., /etc/sysctl.conf is edited. What value is missing? '_______ = 1'",
    "answer": "net.ipv4.ip_forward",
    "explicacion": "The sysctl key for IP forwarding.",
    "pista": "IP forward parameter."
  },
  {
    "question": "238. Specify the command to create an SSH key pair (without path or parameters).",
    "answer": "ssh-keygen",
    "explicacion": "Standard command for generating keys.",
    "pista": "Key generator."
  },
  {
    "question": "239. Which Squid keyword is used to define networks and times (create control lists)?",
    "options": [
      "A. acl",
      "B. allow",
      "C. http_allow",
      "D. permit"
    ],
    "answer": "A",
    "explicacion": "'acl' defines the elements used in rules.",
    "pista": "Define ACL."
  },
  {
    "question": "240. In the Squid excerpt shown (Safe_ports...), what statement is true?",
    "options": [
      "A. Localhost users can access.",
      "B. Missing deny all.",
      "C. Allows SSL anywhere.",
      "D. This proxy cannot be used to access FTP servers on the default port.",
      "E. Badly configured."
    ],
    "answer": "D",
    "explicacion": "If FTP (port 21) is not in the Safe_ports list, and there is a 'deny !Safe_ports' rule, FTP will be blocked.",
    "pista": "FTP not safe."
  },
  
  
  {
    "question": "241. Which command is used to tell the NFS server what filesystems to make available (export)?",
    "options": [
      "A. exportfs",
      "B. mkfs.nfs",
      "C. mount",
      "D. nfsservctl",
      "E. telinit"
    ],
    "answer": "A",
    "explicacion": "exportfs is used to maintain the table of exported NFS file systems.",
    "pista": "Export file systems."
  },
  {
    "question": "242. When Apache is configured to use name-based virtual hosts:",
    "options": [
      "A. A different IP is needed for each.",
      "B. Listen is ignored.",
      "C. Multiple daemons are started.",
      "D. It is also necessary to create a Virtual Host block for the main host.",
      "E. Only ServerName and DocumentRoot can be used."
    ],
    "answer": "D",
    "explicacion": "When name-based vhosts are enabled, the main server configuration 'disappears' and must be defined explicitly as a VirtualHost if it is to serve content.",
    "pista": "Main becomes virtual."
  },
  {
    "question": "243. What is the name of the procmail configuration file in the user's home directory?",
    "answer": ".procmailrc",
    "explicacion": "It is the hidden file .procmailrc.",
    "pista": "Dot procmailrc."
  },
  {
    "question": "244. What is the appropriate entry to allow SSH to be run from inetd?",
    "options": [
      "A. ssh stream tcp nowait root /usr/sbin/tcpd sshd -i",
      "B. ssh stream tcp ... tcpd tcpd",
      "C. ssh stream tcpd ...",
      "D. ssh data ...",
      "E. ssh data ..."
    ],
    "answer": "A",
    "explicacion": "To run sshd from inetd/xinetd, it must be invoked with the '-i' option (inetd mode). The correct inetd syntax includes 'stream tcp nowait root'.",
    "pista": "Stream tcp and -i mode."
  },
  {
    "question": "245. Which command must be used to create a pair of SSH keys?",
    "answer": "ssh-keygen",
    "explicacion": "ssh-keygen is the standard tool.",
    "pista": "Key generator."
  },
  {
    "question": "246. Postfix daemons can be run in a chroot jail by setting the chroot flag in the file...",
    "answer": "master.cf",
    "explicacion": "The master.cf file controls how Postfix processes run, including whether they should run chrooted (column 'chroot' y/n).",
    "pista": "Master file."
  },
  {
    "question": "247. Using only named commands, which one makes named re-read its zone files?",
    "answer": "rndc reload",
    "explicacion": "rndc (Remote Name Daemon Control) is the utility to administer named. 'reload' reloads configuration and zones.",
    "pista": "Daemon control reload."
  },
  {
    "question": "248. Which keys are stored in the authorized_keys file?",
    "answer": "public",
    "explicacion": "authorized_keys stores the PUBLIC keys of clients allowed to connect.",
    "pista": "Public keys."
  },
  {
    "question": "249. Which command can be used when writing scripts to test remote services?",
    "options": [
      "A. snort",
      "B. netmap",
      "C. nc",
      "D. telnet"
    ],
    "answer": "C",
    "explicacion": "nc (netcat) is ideal for scripts because it can send data to ports and receive responses non-interactively.",
    "pista": "TCP/IP Swiss Army Knife."
  },
  {
    "question": "250. All machines outside the network can send emails through the server to addresses not served by it. What is this called?",
    "answer": "open relay",
    "explicacion": "An 'open relay' is a server that allows third parties to send email to other third parties.",
    "pista": "Open relay."
  },
  {
    "question": "251. What is the standard port used by OpenVPN?",
    "options": [
      "A. 1723",
      "B. 4500",
      "C. 500",
      "D. 1194"
    ],
    "answer": "D",
    "explicacion": "The officially registered port for OpenVPN is 1194 (UDP/TCP).",
    "pista": "Eleven ninety-four."
  },
  {
    "question": "252. Which of the following is NOT included in a Snort rule header?",
    "options": [
      "A. protocol",
      "B. action",
      "C. source IP address",
      "D. packet byte offset",
      "E. source port"
    ],
    "answer": "D",
    "explicacion": "The rule header defines action, protocol, IPs, and ports. 'packet byte offset' is a rule option (body/payload detection), not part of the header.",
    "pista": "Offset is body."
  },
  {
    "question": "253. Why are different IP addresses recommended when hosting multiple HTTPS virtual hosts? (Choose TWO)",
    "options": [
      "A. Apache caches keys by IP.",
      "B. The SSL connection is established before the server knows the virtual host name.",
      "C. The SSL key is bound to a specific IP.",
      "D. Only necessary with dynamic content.",
      "E. SNI (Server Name Indication) extension is not universally supported (on very old systems)."
    ],
    "answer": "B, E",
    "explicacion": "Historically, the SSL handshake happens before the HTTP Host header is sent, so the server didn't know which cert to present (B). SNI fixes this, but legacy clients might not support it (E).",
    "pista": "Handshake timing and SNI support."
  },
  {
    "question": "254. What is the name of the Apache module that provides HTTP basic authentication functionality? (Name only)",
    "answer": "mod_auth",
    "explicacion": "The classic module is mod_auth (or mod_auth_basic in newer versions, but 'mod_auth' is the expected legacy answer).",
    "pista": "Auth module."
  },
  {
    "question": "255. Which DNS record type defines which server(s) email for a domain should be sent to?",
    "answer": "MX",
    "explicacion": "Mail Exchanger.",
    "pista": "Mail Exchanger."
  },
  {
    "question": "256. A new user was created on the NIS master server with useradd but cannot log in. Old users can. What step was forgotten?",
    "options": [
      "A. Run yppush (or make in /var/yp) to propagate changes.",
      "B. Run make to generate new maps.",
      "C. Start yppasswdd.",
      "D. Start ypxfr.",
      "E. Restart ypxfr."
    ],
    "answer": "A",
    "explicacion": "After adding a user to local files (/etc/passwd), NIS maps must be regenerated (usually 'make' in /var/yp) and propagated ('yppush'). Option A covers the propagation.",
    "pista": "Push changes."
  },
  {
    "question": "257. With 'UserDir public_html', what is the full path for http://server/~joe/index.html if homes are in /home?",
    "options": [
      "A. /home/joe/public_html/index.html",
      "B. /home/public_html/joe/index.html",
      "C. /home/joe/public_html/htdocs/index.html",
      "D. /home/joe/apache/public_html/index.html"
    ],
    "answer": "A",
    "explicacion": "UserDir specifies the directory inside the user's home. /home/joe + public_html + index.html.",
    "pista": "Home + UserDir."
  },
  {
    "question": "258. What is DNSSEC used for?",
    "options": [
      "A. Encrypted queries.",
      "B. Cryptographic authentication of DNS zones.",
      "C. Secondary queries.",
      "D. Define secure section.",
      "E. Query secure section."
    ],
    "answer": "B",
    "explicacion": "DNSSEC digitally signs records to authenticate their origin and integrity.",
    "pista": "Zone authentication."
  },
  {
    "question": "259. Why should 'disable_vrfy_command = yes' be set in Postfix?",
    "options": [
      "A. Prevents attempts to nonexistent.",
      "B. Prevents email address harvesting techniques.",
      "C. Enables verification.",
      "D. Speeds up relay."
    ],
    "answer": "B",
    "explicacion": "The VRFY command allows asking the server if an email exists. Spammers use it to 'harvest' valid accounts. Disabling it improves privacy.",
    "pista": "Prevent harvesting."
  },
  {
    "question": "260. Which of the following Linux services supports ONLY the RIP routing protocol?",
    "options": [
      "A. gated",
      "B. ipchains",
      "C. netfilter",
      "D. routed",
      "E. zebra"
    ],
    "answer": "D",
    "explicacion": "'routed' is an old daemon that only supports RIP v1/v2. (Gated and Zebra/Quagga support multiple protocols).",
    "pista": "Simple routing daemon."
  },
  {
    "question": "261. Select the Samba option that should be used if the main intention is to configure a guest printing service.",
    "options": [
      "A. security = cups",
      "B. security = ldap",
      "C. security = pam",
      "D. security = share",
      "E. security = printing"
    ],
    "answer": "D",
    "explicacion": "The 'security = share' mode was designed for simple resource sharing (like printers) where validation is by resource rather than by user, facilitating guest access.",
    "pista": "Share level security."
  },
  {
    "question": "262. Which openssl subcommands are used in the process of generating a private key and a Certificate Signing Request (CSR)? (Choose TWO)",
    "options": [
      "A. csr",
      "B. gencsr",
      "C. genkey",
      "D. genrsa",
      "E. req"
    ],
    "answer": "D, E",
    "explicacion": "'genrsa' is used to generate the RSA private key, and 'req' is used to generate the signing request (CSR).",
    "pista": "Generate RSA and Request."
  },
  {
    "question": "263. Which of the following configuration lines will export /usr/local/share/ to nfsclient with read-write access, ensuring all changes are written directly to disk?",
    "options": [
      "A. /usr/local/share nfsclient(rw) written",
      "B. nfsclient: /usr/local/share/:rw,sync",
      "C. /usr/local/share nfsclient:rw:sync",
      "D. /usr/local/share nfsclient(rw,sync)",
      "E. nfsclient(rw,sync) /usr/local/share"
    ],
    "answer": "D",
    "explicacion": "The 'sync' option forces the NFS server to write changes to disk before replying. Syntax: 'directory client(options)'.",
    "pista": "Directory Client (Options)."
  },
  {
    "question": "264. Which of the following PAM modules allows the sysadmin to use an arbitrary file with a list of users/groups and restrictions on system resources?",
    "options": [
      "A. pam_filter",
      "B. pam_limits",
      "C. pam_listfile",
      "D. pam_unix"
    ],
    "answer": "B",
    "explicacion": "The 'pam_limits' module reads /etc/security/limits.conf (or specified file) to set resource limits (CPU, memory, logins) per user or group.",
    "pista": "Resource limits."
  },
  {
    "question": "265. Which of the following are Samba security levels/modes? (Choose TWO)",
    "options": [
      "A. ads",
      "B. data",
      "C. ldap",
      "D. network",
      "E. share"
    ],
    "answer": "A, E",
    "explicacion": "'ads' (Active Directory) and 'share' are valid security modes in the 'security' directive.",
    "pista": "ADS and Share."
  },
  {
    "question": "266. What could be a reason to invoke vsftpd from (x)inetd?",
    "options": [
      "A. Not a good idea, (x)inetd is insecure.",
      "B. Running vsftpd standalone is only possible as root.",
      "C. vsftpd cannot run standalone.",
      "D. (x)inetd has more access control capabilities.",
      "E. (x)inetd is needed for chroot."
    ],
    "answer": "D",
    "explicacion": "Using a super-server like xinetd adds an extra layer of control (tcp_wrappers, time/connection limits) before traffic reaches the FTP service.",
    "pista": "Extra access control."
  },
  {
    "question": "267. What records must be entered in a zone file to use 'Round Robin Load Distribution' for a web server?",
    "options": [
      "A. www 60 IN A 1.1; www 60 IN A 1.2; www 60 IN A 1.3",
      "B. www 60 IN A 1.1:1.2:1.3",
      "C. www 60 IN A 1.1-3",
      "D. www 60 IN RR 1:3",
      "E. www 60 IN RR 1.1 1.2 1.3"
    ],
    "answer": "A",
    "explicacion": "Round Robin DNS is achieved simply by creating multiple A records with the same domain name pointing to different IPs.",
    "pista": "Multiple identical A records."
  },
  {
    "question": "268. Which lines in sshd_config should be changed to increase security? (Choose TWO)",
    "options": [
      "A. Protocol 2, 1",
      "B. PermitEmptyPasswords no",
      "C. Port 22",
      "D. PermitRootLogin yes",
      "E. IgnoreRhosts yes"
    ],
    "answer": "A, D",
    "explicacion": "Force 'Protocol 2' (removing insecure 1) and set 'PermitRootLogin no' to prevent direct superuser attacks.",
    "pista": "Only protocol 2 and no root."
  },
  {
    "question": "269. Which site-specific configuration file for the 'shadow login' suite must be modified to log login failures? (Full path)",
    "answer": "/etc/login.defs",
    "explicacion": "The /etc/login.defs file contains configuration definitions for the login suite, including logging options.",
    "pista": "Login definitions."
  },
  {
    "question": "270. You installed new libraries, but they are not available or listed by ldconfig -p. To which file should the path be added before running ldconfig?",
    "answer": "/etc/ld.so.conf",
    "explicacion": "/etc/ld.so.conf defines the directories where the system searches for shared libraries.",
    "pista": "ld.so config."
  },
  {
    "question": "271. What command is used to manage netfilter rules for IPv6?",
    "options": [
      "A. iptables",
      "B. iptablesv6",
      "C. iptables6",
      "D. ip6tables",
      "E. ipv6tables"
    ],
    "answer": "D",
    "explicacion": "ip6tables is the exact equivalent of iptables but for IPv6 protocol.",
    "pista": "ip6."
  },
  {
    "question": "272. When connecting to an SSH server for the first time, its fingerprint is stored in:",
    "options": [
      "A. ~/.ssh/fingerprints",
      "B. ~/.ssh/id_dsa",
      "C. ~/.ssh/known_hosts",
      "D. ~/.ssh/id_dsa.pub",
      "E. ~/.ssh/gpg.txt"
    ],
    "answer": "C",
    "explicacion": "The SSH client stores known server host keys in ~/.ssh/known_hosts to detect future Man-in-the-Middle attacks.",
    "pista": "Known hosts."
  },
  {
    "question": "273. Which of the following is recommended to reduce Squid disk resource consumption?",
    "options": [
      "A. Disable access lists.",
      "B. Reduce the size of cache_dir in configuration.",
      "C. Rotate logs regularly.",
      "D. Disable FQDN logging.",
      "E. Reduce child processes."
    ],
    "answer": "B",
    "explicacion": "The 'cache_dir' directive defines how much disk space Squid will use for caching. Reducing it frees up disk.",
    "pista": "Cache directory size."
  },
  {
    "question": "274. Which organizations track and report on security flaws in computer technology? (Choose TWO)",
    "options": [
      "A. Bugtraq",
      "B. CERT",
      "C. CSIS",
      "D. Freshmeat",
      "E. Kernel.org"
    ],
    "answer": "A, C",
    "explicacion": "Bugtraq is a famous mailing list. CERT is the classic authority (though sometimes marked C in dumps, B is CERT). Note: If dump says A and C, stick to it, but CERT (B) is the main one.",
    "pista": "Bugtraq and CSIS (Dump answer)."
  },
  {
    "question": "275. Which of the following is NOT a valid ACL type when configuring Squid?",
    "options": [
      "A. src",
      "B. source",
      "C. dstdomain",
      "D. url_regex",
      "E. time"
    ],
    "answer": "B",
    "explicacion": "The ACL type for source address is 'src', not 'source'.",
    "pista": "src is correct abbreviation."
  },
  {
    "question": "276. Enter the name of the Kerberos 5 configuration file (no path).",
    "answer": "krb5.conf",
    "explicacion": "The main configuration file for Kerberos is krb5.conf.",
    "pista": "krb5 config."
  },
  {
    "question": "277. Which are alternative DNS software packages to BIND? (Choose TWO)",
    "options": [
      "A. djbdns",
      "B. easydns",
      "C. superdns",
      "D. dnsmasq",
      "E. dnstiny"
    ],
    "answer": "A, D",
    "explicacion": "djbdns and dnsmasq are popular alternatives.",
    "pista": "djb and masq."
  },
  {
    "question": "278. In which Apache context should SSL support be activated?",
    "options": [
      "A. In a Virtual Host directive",
      "B. In a Location directive",
      "C. In a Directory directive",
      "D. In an SSL Host directive"
    ],
    "answer": "A",
    "explicacion": "SSL is typically configured at the virtual host level (<VirtualHost *:443>).",
    "pista": "Virtual Host."
  },
  {
    "question": "279. Which command creates an SSH tunnel for POP and SMTP protocols?",
    "options": [
      "A. ssh -L:110 -L:25 ...",
      "B. ssh -L 25:110 ...",
      "C. ssh -L mailhost:110 -L mailhost:25 ...",
      "D. ssh -L mailhost:25:110 ...",
      "E. ssh -L 110:mailhost:110 -L 25:mailhost:25 -l user -N mailhost"
    ],
    "answer": "E",
    "explicacion": "Two tunnels are needed (-L local:target:remote). Option E maps local 110 to remote 110 and local 25 to remote 25.",
    "pista": "Double tunnel -L."
  },
  {
    "question": "280. For what purpose does nmap use 'TCP/IP stack fingerprinting'?",
    "options": [
      "A. Determine remote OS.",
      "B. Filter responses.",
      "C. Identify duplicates.",
      "D. Mask responses.",
      "E. Identify servers for forensics."
    ],
    "answer": "A",
    "explicacion": "Stack fingerprinting analyzes how a host responds to anomalous packets to deduce the OS version.",
    "pista": "OS detection."
  },
  {
    "question": "281. A firewall uses MASQUERADE and the connection is unstable. What iptables change could alleviate this?",
    "options": [
      "A. Change MASQUERADE target to SNAT.",
      "B. Change to DNAT.",
      "C. Change to BALANCE.",
      "D. Change to REDIRECT.",
      "E. Change to BNAT."
    ],
    "answer": "A",
    "explicacion": "MASQUERADE has overhead (checking interface IP per packet). If IP is static, SNAT is more efficient and stable.",
    "pista": "SNAT is robust."
  },
  {
    "question": "282. Which sshd settings must be set to 'no' to completely disable password logins? (Choose THREE)",
    "options": [
      "A. PAMAuthentication",
      "B. ChallengeResponseAuthentication",
      "C. UsePAM",
      "D. UsePasswords",
      "E. PasswordAuthentication"
    ],
    "answer": "B, C, E",
    "explicacion": "Disable PasswordAuthentication, ChallengeResponseAuthentication, and UsePAM (to stop PAM prompts).",
    "pista": "Password, Challenge, and PAM."
  },
  {
    "question": "283. Which options are valid in /etc/exports? (Choose TWO)",
    "options": [
      "A. rw",
      "B. ro",
      "C. rootsquash",
      "D. norootsquash",
      "E. uid"
    ],
    "answer": "A, B",
    "explicacion": "rw and ro.",
    "pista": "Read and Write."
  },
  {
    "question": "284. Remote access to CD-RW must be restricted. Which TWO solutions are possible using pam_console?",
    "options": [
      "A. Change display manager...",
      "B. pam_console allows console access...",
      "C. pam_console can control device access via console, allowing/denying in user session.",
      "D. pam_console must be required.",
      "E. Through sudo... Also, configure /etc/pam.d/su to use pam_console."
    ],
    "answer": "C, E",
    "explicacion": "pam_console manages physical device permissions for console users. It can restrict CD-RW or allow sudo users to access as if local.",
    "pista": "Console control and sudo."
  },
  {
    "question": "285. Enter the command used to remove Kerberos tickets from the cache.",
    "answer": "kdestroy",
    "explicacion": "kdestroy deletes the user's active credential file.",
    "pista": "Destroy tickets."
  },
  {
    "question": "286. Which Postfix command rebuilds all alias databases with a single invocation?",
    "options": [
      "A. makealiases",
      "B. newaliases",
      "C. postalias",
      "D. postmapbuild"
    ],
    "answer": "B",
    "explicacion": "'newaliases' is the compatibility command Postfix implements to regenerate the aliases database.",
    "pista": "New aliases."
  },
  {
    "question": "287. Which option must be used with ifconfig to see interfaces that are down?",
    "options": [
      "A. -d",
      "B. -a",
      "C. --all",
      "D. --down",
      "E. None"
    ],
    "answer": "B",
    "explicacion": "ifconfig -a (all) shows all interfaces.",
    "pista": "All (-a)."
  },
  {
    "question": "288. In netfilter, which table contains the built-in chains INPUT, OUTPUT, and FORWARD?",
    "options": [
      "A. ipconn",
      "B. filter",
      "C. nat",
      "D. default",
      "E. masq"
    ],
    "answer": "B",
    "explicacion": "The 'filter' table is the default table for packet filtering chains.",
    "pista": "Filter table."
  },
  {
    "question": "289. Which environment variables does ssh-agent use? (Choose TWO)",
    "options": [
      "A. SSH_AGENT_KEY",
      "B. SSH_AGENT_SOCK",
      "C. SSH_AGENT_PID",
      "D. SSH_AUTH_SOCK",
      "E. SSH_AUTH_PID"
    ],
    "answer": "B, C",
    "explicacion": "Based on the LPI dump key (and provided text context), answers are B and C. (Technical note: Standard vars are SSH_AUTH_SOCK and SSH_AGENT_PID).",
    "pista": "Agent variables (Dump key)."
  },
  {
    "question": "290. Not sure if kernel detected hardware. Which command shows the kernel ring buffer?",
    "answer": "dmesg",
    "explicacion": "dmesg prints kernel boot and hardware detection messages.",
    "pista": "Diagnostic messages."
  },
  {
    "question": "291. A DNS server has IP 192.168.0.1. Which TWO things must be done on the client?",
    "options": [
      "A. Add 'nameserver 192.168.0.1' to /etc/resolv.conf",
      "B. Run route add nameserver...",
      "C. Run ifconfig...",
      "D. Run 'echo \"nameserver 192.168.1.1\" >> /etc/resolv.conf'",
      "E. Run bind..."
    ],
    "answer": "A, D",
    "explicacion": "Configure /etc/resolv.conf. Option A has correct IP (0.1). Option D adds a line (even if IP in option text has typo 1.1, it's the correct action type).",
    "pista": "Edit resolv.conf."
  },
  {
    "question": "292. What does this procmail config do: ':0fw * < 256000 | /usr/bin/foo'?",
    "options": [
      "A. Sends old emails to foo.",
      "B. If contains value less than 256000...",
      "C. Sends mail with fewer words...",
      "D. Program foo used for large mails...",
      "E. If email is smaller than 256000 Bytes, procmail processes it with program foo (filter)."
    ],
    "answer": "E",
    "explicacion": "Condition '* < 256000' checks size. Flag 'f' is filter (pipe). If smaller, pipe through foo.",
    "pista": "Size filter."
  },
  {
    "question": "293. Which file ensures procmail is used to filter incoming mail for a user?",
    "options": [
      "A. .procmail",
      "B. .forward",
      "C. .bashrc",
      "D. /etc/procmailrc",
      "E. /etc/aliases"
    ],
    "answer": "B",
    "explicacion": "The .forward file in the user's home can invoke procmail explicitly.",
    "pista": "Forward to program."
  },
  {
    "question": "294. What types of virtual network devices does OpenVPN use? (Choose TWO)",
    "options": [
      "A. eth",
      "B. tap",
      "C. lo",
      "D. tun",
      "E. ppp"
    ],
    "answer": "B, D",
    "explicacion": "OpenVPN uses 'tun' (layer 3) or 'tap' (layer 2) devices.",
    "pista": "Tun and Tap."
  },
  {
    "question": "295. Suspecting forged 'From:' address. What helps find the real origin?",
    "options": [
      "A. TCP wrappers log.",
      "B. FR-strlog.",
      "C. LOG_REAL_FROM.",
      "D. Filter aliases.",
      "E. Look at Received and Message-ID headers."
    ],
    "answer": "E",
    "explicacion": "'Received:' headers show the actual path of servers the mail traversed.",
    "pista": "Received headers."
  }
  
];