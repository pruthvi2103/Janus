import React, { useEffect, useRef } from "react";

const useMountedEffect = (func: Function, deps?: React.DependencyList) => {
	const didMount = useRef(false);

	useEffect(() => {
		if (didMount.current) func();
		else didMount.current = true;
	}, deps);
};

export default useMountedEffect;
