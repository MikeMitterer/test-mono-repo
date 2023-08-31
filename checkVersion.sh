#!/usr/bin/env bash
# -----------------------------------------------------------------------------
# Describe Script...
# -----------------------------------------------------------------------------

# Vars die in .bashrc gesetzt werden. ~ (DEV_DOCKER, DEV_SEC, DEV_LOCAL) ~~~~~~
# [] müssen entfernt werden (IJ Bug https://goo.gl/WJQGMa)
# if [ -z $[{DEV_DOCKER+set}] ]; then echo "Var 'DEV_DOCKER' nicht gesetzt!"; exit 1; fi

# DEV_BASH muss in .bashrc gesetzt werden. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
if [ -z ${DEV_BASH+x} ]; then echo "Var 'DEV_BASH' nicht gesetzt!"; exit 1; fi
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

# Abbruch bei Problemen (https://goo.gl/hEEJCj)
#
# Wenn ein Fehler nicht automatisch zu einem exit führen soll dann
# kann 'command || true' verwendet werden
#
# Für die $1, $2 Abfragen kann 'CMDLINE=${1:-}' verwendet werden
#
# -e Any subsequent(*) commands which fail will cause the shell script to exit immediately
# -o pipefail sets the exit code of a pipeline to that of the rightmost command
# -u treat unset variables as an error and exit
# -x print each command before executing it
set -eou pipefail

APPNAME="$(basename $0)"
APPNAME_WITHOUT_EXTENSION=${APPNAME%%.*}

SCRIPT=$(realpath $0)
SCRIPTPATH=$(dirname "$SCRIPT")

WORKSPACE=$(realpath $(pwd))

#------------------------------------------------------------------------------
# BASIS

LOGFILE="${APPNAME}_$(date +"%Y%m%d").log"

#------------------------------------------------------------------------------
# Einbinden der globalen Build-Lib
#   Hier sind z.B. Farben, generell globale VARs und Funktionen definiert
#

LIB_DIR="${DEV_BASH}"
#BUILD_LIB="build.lib.sh"
#DOCKER_LIB="docker.lib.sh"

TOOLS_LIB="tools.lib.sh"; . "${DEV_BASH}/${TOOLS_LIB}"

#------------------------------------------------------------------------------
# Lock wird gesetzt
#

LOCKDIR="/var/lock"
LOCKFILE="$LOCKDIR/$APPNAME.lock"

[ -f "${LOCKFILE}" ] && exit 0

# Trap with number: http://goo.gl/IQmYna
trap 'cleanup' EXIT TERM INT

cleanup () {
    rm -f "${LOCKFILE}";
    exit 255;
}

touch "${LOCKFILE}"

#------------------------------------------------------------------------------
# Read settings from settings-file
#   ACHTUNG: Filename ist z.B. executeme.sh.conf
#
SETTINGS_FILE=${APPNAME}.conf

SETTINGS_LOCAL="./$SETTINGS_FILE"
SETTINGS_USER="${HOME}/.$SETTINGS_FILE"
SETTINGS_ETC="/etc/$SETTINGS_FILE"

if test -e "$SETTINGS_LOCAL"
then
    echo "Reading settings from ${SETTINGS_LOCAL}..."
    . "$SETTINGS_LOCAL"
elif test -e "$SETTINGS_USER"
then
    echo "Reading settings from ${SETTINGS_USER}..."
    . "$SETTINGS_USER"
elif test -e "$SETTINGS_ETC"
then
    echo "Reading settings from ${SETTINGS_ETC}..."
    . "$SETTINGS_ETC"
fi

#------------------------------------------------------------------------------
# Functions
#

search() {
    MODULE=${1?sampleFunction muss mind. einen Param haben}

    find . -path "*node_modules*" -prune -o -name package.json -exec grep -H "$MODULE\":" {} \;
}

appInfo() {
    logFileStatus "AppName:             "  "${APPNAME} / ${APPNAME_WITHOUT_EXTENSION}" "no"
    echo
    logFileStatus "Workspace:           "  "${WORKSPACE}"
    logFileStatus "Script:              "  "${SCRIPT}" "no"
    logFileStatus "Script-Path:         "  "${SCRIPTPATH}" "no"
    logFileStatus "Logfile:             "  "${LOGFILE}"
    logFileStatus "Tools-Lib:           "  "${DEV_BASH}/${TOOLS_LIB}"
    logFileStatus "Lockfile:            "  "${LOCKFILE}"
    logFileStatus "Settings:            "  "${SETTINGS_LOCAL}"
}

#------------------------------------------------------------------------------
# Options
#

usage() {
    echo
    echo "Usage: ${APPNAME} [ options ]"
    echo
    usageLine "help | -h                " "Shows this Help-Information"
    usageLine "info | -i                " "Show App-Settings"
    echo
    usageLine "search | -s <module>     " "Search module in dependencies"
    echo
}


CMDLINE=${1:-}
case "${CMDLINE}" in
    -s|search|-search|--search)
        search "$2"
    ;;

    -i|info)
        appInfo
    ;;

    -h|-help|--help|*)
        usage
    ;;

esac

#------------------------------------------------------------------------------
# Alles OK...

exit 0
