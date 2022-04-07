import ora from 'ora'
import path from 'path';
import alert from 'cli-alert-msg';
import copy from 'copy-template-dir'
import chalk from 'chalk';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const { green: g, yellow: y, dim: d } = chalk;

const spinner = ora({ text: '' });

const generate = async (name,src_path, pkgs ,devPkgs) => {
	const outDir = name;
	const vars = {name: `${name}`}
		
    const __filename = fileURLToPath(import.meta.url)
	const __dirname = dirname(__filename)
	const inDirPath = path.join(__dirname, `../templates/${src_path}`);
	const outDirPath = path.join(process.cwd(), outDir);

	copy(inDirPath, outDirPath, vars, async (err, createdFiles) => {
		if (err) throw err;

		console.log(d(`\nCreating files in ${g(`./${outDir}`)} directory:\n`));

		createdFiles.forEach(filePath => {
			const fileName = path.basename(filePath);
			console.log(`${g(`CREATED`)} ${fileName}`);
		});

		console.log();
		spinner.start(
			`${y(`DEPENDENCIES`)} installing…\n\n${d(`It may take moment…`)}`
		);
		process.chdir(outDirPath);
	
        const { execa } = await import("execa");
		await execa(`npm`, [`install`, ...pkgs]);
		devPkgs &&	await execa(`npm`, [`install`, ...devPkgs, `-D`]);
		spinner.succeed(`${g(`DEPENDENCIES`)} installed!`);

		alert({
			type: `success`,
			name: `ALL DONE`,
			msg: `\n\n${createdFiles.length} files created in ${d(
				`./${outDir}`
			)} directory`
		});
	});
};

export default generate;