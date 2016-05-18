pyramid-sphinx-themes
=====================

Pyramid Sphinx themes for Pyramid and projects that use Pyramid.

This project consists of parts that are not yet integrated. The layout and
design are developed using webpack. Somehow, yet to be determined, the design
is magically ported into a Sphinx theme. Finally to test that the theme renders
correctly, we run our sample documentation through Sphinx.

.. TODO:: Port design to Sphinx theme.


Requirements
------------

You will need the following for hacking on this project:

- `Python <https://www.python.org/downloads/>`_
- `Recommended Python packaging tools
  <https://packaging.python.org/en/latest/current/>`_
- `NodeJS with npm <http://nodejs.org/download/>`_


Installing
----------

Assuming you have all the recommended tools listed above installed:


1. Clone the project
++++++++++++++++++++

.. code-block:: bash

    $ git clone https://github.com/Pylons/pyramid-sphinx-themes.git
    $ cd pyramid-sphinx-themes


2. Create a virtual environment
+++++++++++++++++++++++++++++++

.. code-block:: bash

    $ export VENV=${PWD}
    $ python3 -m venv $VENV
    $ $VENV/bin/pip install --upgrade pip setuptools


3. Install requirements
+++++++++++++++++++++++

Install the project in editable mode:

.. code-block:: bash

    $ $VENV/bin/pip install -e .


4. Install frontend tools
+++++++++++++++++++++++++

.. code-block:: bash

    $ npm i


Working with frontend tools
---------------------------

For development mode, with hot reload and compilation of assets:

.. code-block:: bash

    $ npm run dev

View the local site in a browser at http://localhost:8080/

For a quick local build, not optimized:

.. code-block:: bash

    $ npm run build

Create a dist optimized for production:

.. code-block:: bash

    $ npm run dist


Building your docs
------------------

Make edits in your project ``docs/conf.py`` as follows:

1. Add the `pyramid_sphinx_themes` Sphinx extension module name
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

.. code-block:: python

    # Add any Sphinx extension module names here, as strings. They can be
    # extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
    # ones.
    extensions = [
        'sphinx.ext.autodoc',
        'sphinx.ext.intersphinx',
        'sphinx.ext.viewcode',
        'pyramid_sphinx_themes'
        ]

2. Modify the section "Options for HTML output"
+++++++++++++++++++++++++++++++++++++++++++++++

.. code-block:: python

    # -- Options for HTML output ---------------------------------------------------

    from pyramid_sphinx_themes import get_html_themes_path

    # The theme to use for HTML and HTML Help pages.  See the documentation for
    # a list of builtin themes.
    html_theme = 'pyramid_sphinx_themes'

    # Theme options are theme-specific and customize the look and feel of a theme
    # further.  For a list of options available for each theme, see the
    # documentation.
    #html_theme_options = {}

    # Add any paths that contain custom themes here, relative to this directory.
    html_theme_path = get_html_themes_path()


3. Set (or wherever it gets set in the package)
+++++++++++++++++++++++++++++++++++++++++++++++

.. code-block:: Python

    html_use_smartypants = False

Save ``docs/conf.py``.


4. Run `sphinx-build`
+++++++++++++++++++++

While your current directory is ``docs/``, run the command:

.. code-block:: bash

    $ make clean html SPHINXBUILD=../bin/sphinx-build


How this project was assembled
------------------------------

Developers may wonder why various parts of this project are being used, where
they originated, or what is each file's purpose. This section attempts to
explain how this project came to be in its current state.

For designing the front end, ``node``, ``npm``, and ``webpack`` were selected
as the packgage manager, for minifying static assets, and for rapidly
previewing changes in a web browser.

This theme uses the Sphinx theme "basic", and extends it. "basic" is included
with Sphinx.

The design is based upon `trypyramid.com <https://trypyramid.com/>`_, and its
`repository on GitHub <https://github.com/Pylons/trypyramid.com>`_.


Project file structure
----------------------

``docs/`` contains sample source files from which Sphinx builds documentation.
``docs/_build/`` contains the built documentation after running Sphinx.

``node_modules/`` will appear after installing the front-end tools, and it
contains the packages and some source files used to create the Sphinx theme
design.

``pyramid_sphinx_themes/`` contains this project's source files used to
create an installable distribution hosted on PyPI.

``src/`` contains some source files from which we create and design the Sphinx
theme.

Files at the root level are either configuration files or meta information
about this project.


Front-end toolset configuration
+++++++++++++++++++++++++++++++

The front-end toolset is configured using the files at the root level.

* ``.eslint`` is the ECMA Script linter configuration file.
* ``package.json`` is the npm configuration file, specifying the packages used
  in this project.
* ``webpack.config.js`` is the main configuration file for webpack.
* ``webpack.dist.config.js`` configures our design distribution built with
  webpack. We use this distribution to create the files used by Sphinx.
* ``webpack.tmpl.config.js`` configures each of the pages (templates) used in
  the design.

When developing or building a dist, we include only those static assets we
need, thanks to webpack. This optimizes build times for developers and reduces
load times for users at the expense of configuration simplicity.


Static asssets
++++++++++++++

Static assets come from various sources. When these sources are updated, we
update our copies of these source files, either through ``npm`` or manually
copying or diffing them.


Twitter Bootstrap
`````````````````

We use the official `Sass port of Twitter Bootstrap 3
<https://github.com/twbs/bootstrap-sass>`_. After installing via `npm`, source
files are located inside the package at ``assets/``.

Sass files are located in ``assets/stylesheets/``. In our project we use a
custom Sass file, ``_bootstrap-custom.scss``, which is the default
``_bootstrap.scss`` modified to include only those components we want. Read
more about `Twitter Bootstrap Sass configuration
<https://github.com/twbs/bootstrap-sass#sass>`_.

Individual `Bootstrap JavaScripts <http://getbootstrap.com/javascript/>`_ are
in ``assets/javascripts/bootstrap``, with the concatenation of them into
``assets/javascripts/bootstrap.js``.
