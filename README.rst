pyramid-sphinx-themes
=====================

Pyramid Sphinx themes for related projects


Environment
-----------

At the bare minimum you'll need the following for doing development:

- Python
- Virtualenv
- NodeJS


Installing
----------

Assuming you have all the recommended tools listed above installed:


1. Clone the project
++++++++++++++++++++
::

  $ git clone git@github.com:Pylons/pyramid-sphinx-themes.git
  $ cd pyramid-sphinx-themes


2. Create and initialize a virtualenv
+++++++++++++++++++++++++++++++++++++
::

  $ virtualenv .


3. Setup Buildout
+++++++++++++++++
::

  $ bin/python bootstrap.py
  $ bin/buildout


Updating the Buildout
---------------------

To update the buildout:
::

   $ git pull
   $ bin/buildout


Working with assets
-------------------

If you're working on the frontend stack you should compile your less
files to css, merge css and javascript, copy files and do other tasks.
The default Grunt task takes care of less compilation and css+js file
concatenation, use this command:
::

  $ bin/grunt

For dist files:
::

  $ bin/grunt dist

Or you can use the watcher while you're working so each time you
modify a file the default task is executed:
::

  $ bin/grunt watch

If something happen and you need to reinitialize the assets, run this
command:
::

  $ bin/grunt init

