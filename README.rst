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

  # for Python 2
  $ virtualenv .
  # for Python 3
  $ pyvenv-3.3 --upgrade .


3. Setup buildout
+++++++++++++++++
::

  $ bin/python bootstrap.py
  $ bin/buildout


Updating the buildout
---------------------

To update the buildout:
::

   $ git pull
   $ bin/buildout


Working with assets
-------------------

If you're working on the frontend stack you should compile your LESS
files to CSS, merge CSS and JavaScript, copy files and do other tasks.
The default Grunt task takes care of LESS compilation and CSS+JS file
concatenation using this command:
::

  $ bin/grunt

For dist files:
::

  $ bin/grunt dist

Or you can use the watcher while you're working so each time you
modify a file the default task is executed:
::

  $ bin/grunt watch

If something bad happens and you need to reinitialize the assets, run
this command:
::

  $ bin/grunt init


Building docs
-------------

Make edits in `docs/conf.py` as follows:

**1. Add the `pyramid_sphinx_themes` Sphinx extension module name**
::

    # Add any Sphinx extension module names here, as strings. They can be extensions
    # coming with Sphinx (named 'sphinx.ext.*') or your custom ones.
    extensions = [
        'sphinx.ext.autodoc',
        'sphinx.ext.viewcode',
        'pyramid_sphinx_themes'
        ]

**2. Modify the section "Options for HTML output"**
::

    # -- Options for HTML output ---------------------------------------------------
    
    from pyramid_sphinx_themes import get_html_themes_path
    
    # The theme to use for HTML and HTML Help pages.  See the documentation for
    # a list of builtin themes.
    html_theme = 'ground'
    
    # Theme options are theme-specific and customize the look and feel of a theme
    # further.  For a list of options available for each theme, see the
    # documentation.
    #html_theme_options = {}
    
    # Add any paths that contain custom themes here, relative to this directory.
    html_theme_path = get_html_themes_path()

**3. Set (or wherever it gets set in the package)**
::

    html_use_smartypants = False

Save `docs/conf.py`.

**4. Run `sphinx-build`**

While your current directory is `docs/`, run the command:
::

    make clean html SPHINXBUILD=../bin/sphinx-build
